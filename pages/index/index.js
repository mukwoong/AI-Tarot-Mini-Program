const tarotCards = [
  { name: '愚者', img: 'imgs/0.jpg' },
  { name: '魔术师', img: 'imgs/1.jpg' },
  { name: '女祭司', img: 'imgs/2.jpg' },
  { name: '皇后', img: 'imgs/3.jpg' },
  { name: '皇帝', img: 'imgs/4.jpg' },
  { name: '教皇', img: 'imgs/5.jpg' },
  { name: '恋人', img: 'imgs/6.jpg' },
  { name: '战车', img: 'imgs/7.jpg' },
  { name: '力量', img: 'imgs/8.jpg' },
  { name: '隐者', img: 'imgs/9.jpg' },
  { name: '命运之轮', img: 'imgs/10.jpg' },
  { name: '正义', img: 'imgs/11.jpg' },
  { name: '倒吊人', img: 'imgs/12.jpg' },
  { name: '死神', img: 'imgs/13.jpg' },
  { name: '节制', img: 'imgs/14.jpg' },
  { name: '恶魔', img: 'imgs/15.jpg' },
  { name: '高塔', img: 'imgs/16.jpg' },
  { name: '星星', img: 'imgs/17.jpg' },
  { name: '月亮', img: 'imgs/18.jpg' },
  { name: '太阳', img: 'imgs/19.jpg' },
  { name: '审判', img: 'imgs/20.jpg' },
  { name: '世界', img: 'imgs/21.jpg' },
  { name: '权杖Ⅰ', img: 'imgs/Wands01.jpg' },
  { name: '权杖Ⅱ', img: 'imgs/Wands02.jpg' },
  { name: '权杖Ⅲ', img: 'imgs/Wands03.jpg' },
  { name: '权杖Ⅳ', img: 'imgs/Wands04.jpg' },
  { name: '权杖Ⅴ', img: 'imgs/Wands05.jpg' },
  { name: '权杖Ⅵ', img: 'imgs/Wands06.jpg' },
  { name: '权杖Ⅶ', img: 'imgs/Wands07.jpg' },
  { name: '权杖Ⅷ', img: 'imgs/Wands08.jpg' },
  { name: '权杖Ⅸ', img: 'imgs/Wands09.jpg' },
  { name: '权杖Ⅹ', img: 'imgs/Wands10.jpg' },
  { name: '权杖侍从', img: 'imgs/Wands11.jpg' },
  { name: '权杖骑士', img: 'imgs/Wands12.jpg' },
  { name: '权杖皇后', img: 'imgs/Wands13.jpg' },
  { name: '权杖国王', img: 'imgs/Wands14.jpg' },
  { name: '圣杯Ⅰ', img: 'imgs/Cups01.jpg' },
  { name: '圣杯Ⅱ', img: 'imgs/Cups02.jpg' },
  { name: '圣杯Ⅲ', img: 'imgs/Cups03.jpg' },
  { name: '圣杯Ⅳ', img: 'imgs/Cups04.jpg' },
  { name: '圣杯Ⅴ', img: 'imgs/Cups05.jpg' },
  { name: '圣杯Ⅵ', img: 'imgs/Cups06.jpg' },
  { name: '圣杯Ⅶ', img: 'imgs/Cups07.jpg' },
  { name: '圣杯Ⅷ', img: 'imgs/Cups08.jpg' },
  { name: '圣杯Ⅸ', img: 'imgs/Cups09.jpg' },
  { name: '圣杯Ⅹ', img: 'imgs/Cups10.jpg' },
  { name: '圣杯侍从', img: 'imgs/Cups11.jpg' },
  { name: '圣杯骑士', img: 'imgs/Cups12.jpg' },
  { name: '圣杯皇后', img: 'imgs/Cups13.jpg' },
  { name: '圣杯国王', img: 'imgs/Cups14.jpg' },
  { name: '宝剑Ⅰ', img: 'imgs/Swords01.jpg' },
  { name: '宝剑Ⅱ', img: 'imgs/Swords02.jpg' },
  { name: '宝剑Ⅲ', img: 'imgs/Swords03.jpg' },
  { name: '宝剑Ⅳ', img: 'imgs/Swords04.jpg' },
  { name: '宝剑Ⅴ', img: 'imgs/Swords05.jpg' },
  { name: '宝剑Ⅵ', img: 'imgs/Swords06.jpg' },
  { name: '宝剑Ⅶ', img: 'imgs/Swords07.jpg' },
  { name: '宝剑Ⅷ', img: 'imgs/Swords08.jpg' },
  { name: '宝剑Ⅸ', img: 'imgs/Swords09.jpg' },
  { name: '宝剑Ⅹ', img: 'imgs/Swords010.jpg' },
  { name: '宝剑侍从', img: 'imgs/Swords11.jpg' },
  { name: '宝剑骑士', img: 'imgs/Swords12.jpg' },
  { name: '宝剑皇后', img: 'imgs/Swords13.jpg' },
  { name: '宝剑国王', img: 'imgs/Swords14.jpg' },
  { name: '钱币Ⅰ', img: 'imgs/Pents01.jpg' },
  { name: '钱币Ⅱ', img: 'imgs/Pents02.jpg' },
  { name: '钱币Ⅲ', img: 'imgs/Pents03.jpg' },
  { name: '钱币Ⅳ', img: 'imgs/Pents04.jpg' },
  { name: '钱币Ⅴ', img: 'imgs/Pents05.jpg' },
  { name: '钱币Ⅵ', img: 'imgs/Pents06.jpg' },
  { name: '钱币Ⅶ', img: 'imgs/Pents07.jpg' },
  { name: '钱币Ⅷ', img: 'imgs/Pents08.jpg' },
  { name: '钱币Ⅸ', img: 'imgs/Pents09.jpg' },
  { name: '钱币Ⅹ', img: 'imgs/Pents10.jpg' },
  { name: '钱币侍从', img: 'imgs/Pents11.jpg' },
  { name: '钱币骑士', img: 'imgs/Pents12.jpg' },
  { name: '钱币皇后', img: 'imgs/Pents13.jpg' },
  { name: '钱币国王', img: 'imgs/Pents14.jpg' },

];

function randomTarotCards() {
  const shuffled = tarotCards.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

function randomOrientation() {
  return Math.random() < 0.5 ? 'reversed' : 'upright';
}


Page({
  data: {
    inputText: '',
    cards: []
  },
  summary: '', // 添加一个 summary 变量
  
  onInput: function(e) {
    this.setData({
      inputText: e.detail.value
    });
  },

  onDraw: function() {
    const cards = [];
    const randomCards = randomTarotCards(); // 获取三张随机卡牌
    for (let i = 0; i < 3; i++) {
      const card = randomCards[i];
      const orientation = randomOrientation();
      cards.push({
        cardName: card.name,
        cardImg: card.img,
        orientation: orientation
      });
    }

    const formattedCards = cards.map(card => `${card.cardName}${card.orientation === 'reversed' ? '逆位' : '正位'}`).join('，');
    this.summary = `${this.data.inputText} Tarot reading：${formattedCards}`; // 将 summary 变量赋值

    this.setData({
      cards: cards
    });
    console.log(this.summary)
    
  },

  async showMessage() {
    wx.showModal({
      title: '提示',
      content: this.summary,
      showCancel: false
    });
  }
         
});
