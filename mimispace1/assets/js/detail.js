// 언어 감지 (URL 파라미터 > localStorage > 기본값 순서로 확인)
const urlParams = new URLSearchParams(window.location.search)
const lang = urlParams.get('lang') || localStorage.getItem('userLang') || (navigator.language.startsWith("ko") ? "ko" : "en")
console.log("Detected language:", lang)
console.log("URL params:", urlParams.toString())

/* LOADING DETAIL PAGE HTML */
/* GET ID PARAM TO FETCH THE SAME NAME FILE */
async function fetchPage() {
    const linkId = urlParams.get("id")
    console.log(linkId)
    const errorMsg = lang === "ko" ? "아직 준비가 덜 됐네요😲" : "Not quite ready yet😲"

    try {
        // 상대 경로와 절대 경로 모두 시도
        const relativeUrl = `../../data/${lang}/project/detail/${linkId}.html`
        const absoluteUrl = `/mimispace1/data/${lang}/project/detail/${linkId}.html`
        
        console.log("Trying relative URL:", relativeUrl)
        console.log("Trying absolute URL:", absoluteUrl)
        console.log("Current location:", window.location.href)
        
        // 먼저 절대 경로로 시도
        let response = await fetch(absoluteUrl)
        let fetchUrl = absoluteUrl
        
        // 절대 경로가 실패하면 상대 경로로 시도
        if (!response.ok) {
            console.log("Absolute path failed, trying relative path...")
            response = await fetch(relativeUrl)
            fetchUrl = relativeUrl
        }
        console.log("Response status:", response.status)
        console.log("Response ok:", response.ok)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const htmlContent = await response.text()
        console.log("Successfully fetched HTML content, length:", htmlContent.length)
        return htmlContent
    } catch (error) {
        // WHEN FILE IS NOT FOUND
        console.error("Error fetching page:", error)
        console.error("Failed URL:", fetchUrl)
        console.error("Project ID:", linkId)
        console.error("Language:", lang)
        
        // 더 구체적인 에러 메시지
        const detailedErrorMsg = lang === "ko" 
            ? `프로젝트 "${linkId}"의 상세 페이지를 찾을 수 없습니다😲` 
            : `Project detail page for "${linkId}" not found😲`
        
        alert(detailedErrorMsg)
        window.history.back()
        return null
    }
}

/* DRAW HTML */
async function drawHtml() {
    const fetchedHtml = await fetchPage()
    const body = document.querySelector(".body-container")
    if (!fetchedHtml) {
        // 가져올 수 없음 표시 필요
        console.log("Failed to fetch")
    }
    body.innerHTML = body.innerHTML + fetchedHtml
    animation()
}
drawHtml()

/* ANIMATION FUNCTION */
function animation() {
    // HEADER BACKGROUND DROPS
    setTimeout(function () {
        document.getElementById("headerBg").style.transform = "translateY(0)"
    }, 100)

    // PROJECT DESCRIPTION RISE UP
    setTimeout(function () {
        document.getElementById("projectDescription").style.transform = "translateY(0)"
    }, 1100)

    // PROJECT TITLE RISE UP
    setTimeout(function () {
        document.getElementById("headerTitle").style.transform = "translateY(0)"
    }, 600)

    // PROJECT SITE BUTTON ANIMATION
    if (document.getElementById("projectLinks")) {
        projectLinksAnimation()
    }
}

/* ANIMATION FOR VISITING PROJECT SITE BUTTON AT THE BOTTOM  */
function projectLinksAnimation() {
    const projectLink = document.getElementById("projectLinks")
    const viewHeight = document.documentElement.clientHeight
    let projectLinkPosition = document.documentElement.offsetHeight - projectLink.offsetHeight

    window.addEventListener("scroll", () => {
        if (projectLinkPosition !== document.documentElement.offsetHeight - projectLink.offsetHeight) {
            projectLinkPosition = document.documentElement.offsetHeight - projectLink.offsetHeight
        }

        if (window.scrollY + viewHeight + 150 >= projectLinkPosition) {
            document.getElementById("projectLinks").style.transform = "translateY(0)"
            document.getElementById("projectLinks").style.opacity = 1
        }
    })
}

console.log("detail.js")
