import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.GridLayout;
import java.awt.Insets;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.awt.event.ActionEvent;

public class BlackJack extends JFrame implements ActionListener
{
  public class card_info 
  {
    String m_strCardText;
    int m_nCardNumber;
  }

  ArrayList<card_info> m_cardArr = new ArrayList<card_info>();

  JPanel m_topPanel; 
  JButton m_btTopButton;
  JLabel m_lbTopLabel;
  Integer m_topScore=0;
 
  JPanel m_bottomPanel;
  JButton m_btBottomButton;
  JLabel m_lbBottomLabel;
  Integer m_bottomScore=0;

  JPanel m_rightPanel; 
  JButton m_btRightButton1;
  JButton m_btRightButton2;

  String m_turn = "top";

  public BlackJack ()
  {
    super("Blackjack");
    setSize(800, 600);
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

    

    for(int i=1;i<=13;++i){
      card_info l_cCardInfo = new card_info();
      l_cCardInfo.m_strCardText = "S_";
      l_cCardInfo.m_strCardText = "C_";
      l_cCardInfo.m_strCardText = "D_";
      l_cCardInfo.m_strCardText = "H_";
      // m_cardArr.add("S_" + i);
      // m_cardArr.add("C_" + i);
      // m_cardArr.add("D_" + i);
      // m_cardArr.add("H_" + i);
    }
    



    // top buttons
    m_topPanel = new JPanel();
    GridLayout l_GridLayout = new GridLayout(1,2);
    m_topPanel.setLayout(l_GridLayout);
    m_lbTopLabel = new JLabel("Score" + Integer.toString(m_topScore));
    m_topPanel.add(m_lbTopLabel);
    for (int i=0; i<2; ++i) 
    {
      int l_cardNum = randomSingleton.gi().getRandom(m_cardArr.size());
      String l_stCardNum = m_cardArr.get(l_cardNum);
      m_btTopButton = new JButton(l_stCardNum);
      // m_btTopButton.setMargin(new Insets(15, 15, 15, 15));
      m_topPanel.add(m_btTopButton);
      m_cardArr.remove(l_cardNum);
      m_topPanel.setBackground(Color.ORANGE);
      m_topScore = Integer.parseInt(l_stCardNum.split("_",2)[1]) + m_topScore;
      System.out.println(m_topScore);
    };
    
    getContentPane().add(BorderLayout.NORTH, m_topPanel);
    m_topPanel.setBorder(BorderFactory.createEmptyBorder(30, 30, 50, 30));



    // bottom
    m_bottomPanel = new JPanel();
    m_bottomPanel.setLayout(l_GridLayout);
    getContentPane().add(BorderLayout.SOUTH, m_bottomPanel);

    for (int i=0; i<2; ++i) 
    {
      int l_cardNum = randomSingleton.gi().getRandom(m_cardArr.size());
      String l_stCardNum = m_cardArr.get(l_cardNum);
      m_btBottomButton = new JButton(l_stCardNum);
      m_bottomPanel.add(m_btBottomButton);
      m_bottomPanel.setBackground(Color.PINK);
      m_cardArr.remove(l_cardNum);
    };
    
    getContentPane().add(BorderLayout.SOUTH, m_bottomPanel);
    m_bottomPanel.setBorder(BorderFactory.createEmptyBorder(30, 30, 50, 30));



    // right   
    m_rightPanel = new JPanel();
    m_rightPanel.setLayout(l_GridLayout);

    m_btRightButton1 = new JButton("add");
    m_btRightButton2 = new JButton("pass");

    m_rightPanel.setBackground(Color.GRAY);
    m_rightPanel.add(m_btRightButton1);
    m_rightPanel.add(m_btRightButton2);
    m_btRightButton1.addActionListener(this);
    m_btRightButton2.addActionListener(this);

    getContentPane().add(BorderLayout.EAST, m_rightPanel);
    m_rightPanel.setBorder(BorderFactory.createEmptyBorder(50, 50, 50, 50));

    setVisible(true);
  }

  @Override
    public void actionPerformed (ActionEvent a_cEvent)
    {
      int l_cardNum = randomSingleton.gi().getRandom(m_cardArr.size());
      String l_stCardNum = m_cardArr.get(l_cardNum);
      m_cardArr.remove(l_cardNum);
      String l_strEventActionCommand = a_cEvent.getActionCommand();

      if(l_strEventActionCommand == "add") 
      {
        if(m_turn == "top")  
        {
          m_turn = "bottom";
          m_btTopButton = new JButton(l_stCardNum);
          m_topPanel.add(m_btTopButton);
          m_topPanel.revalidate();
          m_topPanel.repaint();
        } else 
        {
          m_turn = "top";
          m_btBottomButton = new JButton(l_stCardNum);
          m_bottomPanel.add(m_btBottomButton);
          m_bottomPanel.revalidate();
          m_bottomPanel.repaint();
        }
      } else 
      {
        if(m_turn == "top")  
        {
          m_turn = "bottom";
        } else 
        {
          m_turn = "top";
        }
      }

      if(m_cardArr.size() == 0) {
      }
    }
}
