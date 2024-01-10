import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Font;
import java.awt.GridLayout;
import java.awt.Image;
import java.awt.event.ActionListener;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.awt.event.ActionEvent;

public class BlackJack extends JFrame implements ActionListener
{
  public class card_info 
  {
    String m_strCardText;
    Image m_cCardImage;
    int m_nCardNumber;
  }
  ArrayList<card_info> m_cardArr = new ArrayList<card_info>();
  ArrayList<card_info> m_arrTopList = new ArrayList<>();
  ArrayList<card_info> m_arrBottomList = new ArrayList<>();

  
  JPanel m_topPanel; 
  JLabel m_lbTopLabel;
  int m_nTopScore;

  JPanel m_bottomPanel;
  JLabel m_lbBottomLabel;
  int m_nBottomScore;

  JPanel m_rightPanel; 
  JButton m_btRightButtonAdd;
  JButton m_btRightButtonTurn;
  JButton m_btRightButtonReset;

  JPanel m_centrePanel;
  JLabel m_lbCentreLabel;
  String m_strCentreLabel; 

  String m_turn;
  GridLayout m_GridLayout = new GridLayout(1,2);

  public BlackJack ()
  {
    super("Blackjack");
    setSize(800, 600);
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

    init();
  }

  // 카드 초기 생성
  private void init ()
  {
    // 카드 생성
    create_card_list("S");
    create_card_list("C");
    create_card_list("H");
    create_card_list("D");

    // 플레이 순서 초기화
    m_turn = "PLAYER";

    // 탑(딜러) 컨트롤 생성
    m_topPanel = new JPanel();
    m_topPanel.setLayout(m_GridLayout);
    m_lbTopLabel = new JLabel();
    m_topPanel.add(m_lbTopLabel);

    m_topPanel.setBackground(Color.ORANGE);
    getContentPane().add(BorderLayout.NORTH, m_topPanel);
    m_topPanel.setBorder(BorderFactory.createEmptyBorder(30, 30, 50, 30));
    score_print(m_arrTopList, m_lbTopLabel);

    // 바텀(플레이어) 컨트롤 생성
    m_bottomPanel = new JPanel();
    m_bottomPanel.setLayout(m_GridLayout);
    m_lbBottomLabel = new JLabel();
    m_bottomPanel.add(m_lbBottomLabel);  
    // if(m_turn == "PLAYER") {
      for(int i=0; i<2; ++i)
      {
        add_card(m_bottomPanel, m_arrBottomList);
      }
    // }
    score_print(m_arrBottomList, m_lbBottomLabel);

    m_bottomPanel.setBackground(Color.PINK);
    getContentPane().add(BorderLayout.SOUTH, m_bottomPanel);
    m_bottomPanel.setBorder(BorderFactory.createEmptyBorder(30, 30, 50, 30));
    

    // 오른쪽 카드 뽑기 버튼 컨트롤 생성
    m_rightPanel = new JPanel();
    m_rightPanel.setLayout(m_GridLayout);
    m_btRightButtonAdd = new JButton();
    m_btRightButtonTurn = new JButton();
    m_btRightButtonReset = new JButton();
    create_play_button(m_btRightButtonAdd, "Add", true);
    create_play_button(m_btRightButtonTurn, "Turn", true);
    create_play_button(m_btRightButtonReset, "Reset", false);

    m_rightPanel.setBorder(BorderFactory.createEmptyBorder(50, 50, 50, 50));
    getContentPane().add(BorderLayout.EAST, m_rightPanel);

    // 중앙 상태 메세지 컨트롤 생성
    m_centrePanel = new JPanel();
    m_lbCentreLabel = new JLabel(m_strCentreLabel);
    m_lbCentreLabel.setText("Player's turn");
    m_centrePanel.add(m_lbCentreLabel);

    Font l_bigFont = new Font(Font.SANS_SERIF, Font.BOLD, 30);
    m_lbCentreLabel.setFont(l_bigFont);
    m_lbCentreLabel.setForeground(Color.WHITE);
    m_centrePanel.setBackground(Color.BLUE);
    m_centrePanel.setBorder(BorderFactory.createEmptyBorder(100, 100, 100, 100));
    getContentPane().add(BorderLayout.CENTER, m_centrePanel);

    setVisible(true);
  };

  // 오른쪽 버튼 생성
  private void create_play_button (JButton a_btButton, String a_strText, Boolean a_bBoolean) 
  {
    a_btButton.setText(a_strText);
    a_btButton.setEnabled(a_bBoolean);
    m_rightPanel.add(a_btButton);
    a_btButton.addActionListener(this);

  };
  
  // 카드 배열 생성
  private void create_card_list (String a_strKey) 
  {

    BufferedImage l_cBufferedImage = get_card_image("./cardImage.jpg");
    if(l_cBufferedImage == null) 
    {
      System.out.println("l_cBufferedImage == null");
      return;
    }
    
    final int L_N_WIDTH = 110;
    final int L_N_HEIGHT = 162;

    for(int i=0;i<13;++i){
      card_info l_cCardInfo = new card_info();
      l_cCardInfo.m_strCardText = a_strKey;

      int l_nIndex = i + 1;
      l_cCardInfo.m_nCardNumber = l_nIndex;

      int l_nX = (L_N_WIDTH * i);
      int l_nY = 0;

      switch (l_cCardInfo.m_strCardText) {
        case "C":
          l_nY = (L_N_HEIGHT * 0);
          break;
        case "D":
          l_nY = (L_N_HEIGHT * 1);
          break;
        case "H":
          l_nY = (L_N_HEIGHT * 2);
          break;
        case "S":
          l_nY = (L_N_HEIGHT * 3);
          break;
        default:

          break;
      };

      BufferedImage l_cSubImage = l_cBufferedImage.getSubimage(l_nX, l_nY, L_N_WIDTH, L_N_HEIGHT);

      l_cCardInfo.m_cCardImage = l_cSubImage.getScaledInstance(L_N_WIDTH / 2, L_N_HEIGHT / 2, BufferedImage.TYPE_INT_RGB);
      m_cardArr.add(l_cCardInfo);
    }
  }

  // 카드 추가
  private void add_card (JPanel a_pnParent, ArrayList<card_info> a_arrCardList) 
  {
    int l_randomNum = randomSingleton.gi().getRandom(m_cardArr.size());
    card_info l_cCard = m_cardArr.get(l_randomNum);
    
    JLabel l_lbCardLabel = new JLabel(new ImageIcon(l_cCard.m_cCardImage));
    a_pnParent.add(l_lbCardLabel);
    
    a_arrCardList.add(l_cCard);
    m_cardArr.remove(m_cardArr.get(l_randomNum));
    a_pnParent.revalidate();
    a_pnParent.repaint();
  }

  // 카드 점수 합산
  private int get_score_calculator(ArrayList<card_info> a_cardList) 
  {
    int l_nScore = 0;
    int l_nCardNum;
    for (int i=0; i<a_cardList.size(); ++i)
    {
      l_nCardNum = a_cardList.get(i).m_nCardNumber;
      if(l_nCardNum == 1) 
      {
        l_nCardNum = 11;
      } 
      else if(l_nCardNum == 11 || l_nCardNum == 12 || l_nCardNum == 13)
      {
        l_nCardNum = 10;
      } 

      l_nScore += l_nCardNum;
    }

    // 숫자 1 카드를 뽑으면 스코어가 11로 자동으로 더해지고
    // 총 합이 21을 넘기면 -10을 해서 1로 바꿔준다.
    if(l_nScore > 21)
    {
      for (int i=0; i<a_cardList.size(); ++i)
      {
        l_nCardNum = a_cardList.get(i).m_nCardNumber;
        if(l_nCardNum == 1)
        {
          l_nScore = l_nScore - 10;
          if(l_nScore <= 21)
          {
            break;
          }
        }
      }
    }
    
    if(m_turn == "PLAYER") 
    {
      if(l_nScore > 21)
      {
        m_lbCentreLabel.setText("You lost");
        
        m_btRightButtonReset.setEnabled(true);
        m_btRightButtonAdd.setEnabled(false);
        m_btRightButtonTurn.setEnabled(false);
      }
      m_nBottomScore = l_nScore;
    }

    if(m_turn == "DEALER")
    {
      if(l_nScore > 21) 
      {
        m_lbCentreLabel.setText("You won");
        m_btRightButtonReset.setEnabled(true);
        m_btRightButtonAdd.setEnabled(false);
      } else if (l_nScore == m_nBottomScore) 
      {
        m_lbCentreLabel.setText("You lost");
        m_btRightButtonReset.setEnabled(true);
        m_btRightButtonAdd.setEnabled(false);
      } else if(l_nScore == 21) 
      {
        m_lbCentreLabel.setText("You lost");
        m_btRightButtonReset.setEnabled(true);
        m_btRightButtonAdd.setEnabled(false);
        // m_btRightButtonTurn.setEnabled(false);
      } else if (21 > l_nScore) 
      {
        if(l_nScore > m_nBottomScore) {
          m_lbCentreLabel.setText("You lost");
          m_btRightButtonReset.setEnabled(true);
          m_btRightButtonAdd.setEnabled(false);
        }
      }

      m_nTopScore = l_nScore;
    }
    return l_nScore;
  }

  // 점수 프린트
  private void score_print (ArrayList<card_info> a_cardList, JLabel a_lbLabel) 
  {
    int l_nScore = get_score_calculator(a_cardList);
    a_lbLabel.setText("Score : " + Integer.toString(l_nScore));
  }

  // 카드 이미지
  private BufferedImage get_card_image(String a_strPath)
  {
    BufferedImage l_cBufferedImage = null;

    try
    {
      URL l_cUrl = getClass().getResource(a_strPath);
      File l_cFile = new File(l_cUrl.getPath());
      l_cBufferedImage = ImageIO.read(l_cFile);
    }
    catch (IOException e)
    {
      System.out.println(e.toString());
    }

    return l_cBufferedImage;
  }

  @Override
  public void actionPerformed (ActionEvent a_cEvent)
  {
    if(m_cardArr.size()!=0)
    {
      String l_strEventActionCommand = a_cEvent.getActionCommand();

      if(l_strEventActionCommand == "Add")
      {
        if(m_turn == "DEALER")
        {
          add_card(m_topPanel, m_arrTopList);

          score_print(m_arrTopList, m_lbTopLabel);
        } else 
        {
          add_card(m_bottomPanel, m_arrBottomList);

          score_print(m_arrBottomList, m_lbBottomLabel);
        }
      } else if(l_strEventActionCommand == "Turn") 
      {
        for(int i=0; i<2; ++i)
        {
          add_card(m_topPanel, m_arrTopList);
        }
        m_strCentreLabel = "Dealer's turn";
        m_lbCentreLabel.setText(m_strCentreLabel);
        m_turn = "DEALER";
        score_print(m_arrTopList, m_lbTopLabel);
        m_btRightButtonTurn.setEnabled(false);
      } else if(l_strEventActionCommand == "Reset")
      {
        m_cardArr.clear();
        m_arrTopList.clear();
        m_arrBottomList.clear();
        m_nTopScore = 0;
        m_nBottomScore = 0;
        getContentPane().removeAll();
        m_turn = "PLAYER";
        init();  
      }
    }
  }
}


//enum
// 코드 분리