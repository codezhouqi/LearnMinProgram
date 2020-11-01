Page({
  data: {
    name:'codezhouqi',
    age: '18',
    students: [
      {id:110,name: "kobe",age: "49"},
      {id:111,name: "james",age: "39"},
      {id:112,name: "kuli",age: "29"},
      {id:113,name: "zhou",age: "18"}
    ],
    count:0
  },
  handleBtnClick(){
    // this.data.count +=1
    this.setData({
      count:this.data.count+=1
    })
  },
  handleSubClick(){
    this.setData({
      count: this.data.count-=1
    })
  }
})