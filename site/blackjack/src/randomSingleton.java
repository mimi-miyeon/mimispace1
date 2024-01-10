import java.util.Random;

public class randomSingleton {
  private static randomSingleton instence = null;
  private Random m_Random;

  // 생성자에 private 사용 이유 : 인스턴스화(객체화) 못 하게
  private randomSingleton(){
    m_Random = new Random();
    m_Random.setSeed(System.currentTimeMillis());
  }

  // static은 인스턴스화 하지 않아도 사용할 수 있게
  public static randomSingleton gi () {
    if(instence == null) {
      instence = new randomSingleton();
    }
    return instence;
  }

  public int getRandom(int bound) {
    return m_Random.nextInt(bound);
  }
}
// static private public