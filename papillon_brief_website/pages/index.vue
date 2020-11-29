<template>
  <div class="container">
    <Navigation class="navi" @product="product_scroll" @news="news_scroll" @contact="contact_scroll" @information="information_scroll"/>
    <div class="firstPanel">
      <div class="bar">
        <div class="papillon">
          <img src="~/static/image/papillon.png" class="logo" />
        </div>
        <div class="menu">
          <span class="product" @click="product_scroll">Product</span>
          <span class="news" @click="news_scroll">News</span>
          <span class="contact" @click="contact_scroll">Contact</span>
          <span class="info" @click="information_scroll">Information</span>
        </div>
      </div>
      <img src="~/static/image/ossan_square.jpg" class="ossanSquare" />
      <div class="textBlock">
        <span class="toSport">
          <h1>遊びからスポーツへ</h1>
        </span>
        <div class="eplayersPos">
          <span class="eplayers">
            e-players<span class="praise">でゲームに称賛を</span>
          </span>
        </div>
        <div class="content">
          <span class="eplayers">e-players</span>は、スマホ一つで<br>
          ゲーム大会を行えるサポートツールです。<br>
          運営者、プレイヤーがお互いに<br>
          より楽しんでゲーム大会を実施することができます。
        </div>
        <img src="~/static/image/ossan.png" class="ossan" />
      </div>
    </div>
    <div class="secondPanel">
      <div class="textBlock">
        <span class="title">
          シンプルでわかりやすく
          </span>
          <br>
          <br>
          <br>
        1分35秒であっという間にユーザー登録完了。<br>
        大会に参加するための長い手続きもなし。<br>
        "<span class="highlight">面倒な手続き</span>"は、もう必要ありません。<br>
        シンプルなデザインを採用することで<br>
        アプリ内に難しい操作はありません。
      </div>
      <div class="image">
        <img src="~/static/image/chat.png" class="image2" />
      </div>
    </div>
    <div class="thirdPanel">
      <div class="title" id="news">
        <div class="purpleDot"></div>
        News
        <div class="detail">当社の様々な情報を素早くお届け致します。</div>
        <div v-for="n in news" :key="n">
          <div class="banner">
            <span class="bannerDate">{{n.date}}</span>
            <span class="bannerTitle">{{n.title}}</span>
          </div>
        </div>
        <span class="seeDetail">詳しく見る</span>
      </div>
    </div>
    <div class="fourthPanel">
      <div class="title">
        <div class="purpleDot"></div>
        Contact
        <div class="detail">お気軽にご相談ください。</div>
        <div class="forms">
          <div class="topic">
            会社名<br>
            <input type="text" placeholder="例:株式会社Papillon" id="company"/><br>
          </div>
          <div class="topic">
            お名前<br>
            <input type="text" placeholder="姓" class="shortInput" id="firstname"/><br>
            <input type="text" placeholder="名" class="shortInput" id="lastname"/><br>
          </div>
          <div class="topic">
            メールアドレス<br>
            <input type="text" placeholder="例:papillon@domain.com" id="email"/>
          </div>
          <div class="topic">
            お問い合わせ内容<br>
            <div class="selectWrap">
              <select name="inquiry" id="inquiry">
                <option selected="true" disabled="disabled" value="null">選択してください...</option>
                <option value="question">質問</option>
                <option value="idea">意見</option>
              </select>
            </div>
          </div>
          <div>
            <div class="policy">送信されたフォーム記載の情報については、
              <br class="br-sp" />
              <br class="br-pc" />
              当社の業務遂行のために利用し、
              <br class="br-pc" />
              ご本人の事前の同意を得た場合や法令に基づく場合を除き、
              <br class="br-sp" />
              <br class="br-pc" />
              第三者への提供や他の目的での利用は致しません。
            </div>
            <span class="sendButton" @click="sendMail">送信する</span>
          </div>
        </div>
      </div>
    </div>
    <div class="fifthPanel">
      <div class="title">
        <div class="purpleDot"></div>
        Information
        <div class="detail">会社情報</div>
      </div>
      <div class="info">
        <span class="key">企業名</span>
        <span class="content">株式会社Papillon</span>
      </div>
      <div class="info">
        <span class="key">創業</span>
        <span class="content">2019年12月03日</span>
      </div>
      <div class="info">
        <span class="key">資本金</span>
        <span class="content">100万円</span>
      </div>
      <div class="info">
        <span class="key">代表取締役</span>
        <span class="content">都築亮吾</span>
      </div>
      <!-- <div class="info">
        <span class="key">所在地</span>
        <span class="content">愛知県豊田市栄町 4-2-9</span>
      </div> -->
      <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.333949226142!2d137.14966815130126!3d35.09837118023784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004a00bc6c4a4a5%3A0x2363a3d5f0bd8e02!2z44CSNDcxLTAwNjYg5oSb55-l55yM6LGK55Sw5biC5qCE55S677yS5LiB55uu77yZ4oiS77yRIOOCteOCq-OCqOe-veW5uA!5e0!3m2!1sja!2sjp!4v1603384880793!5m2!1sja!2sjp" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"
      class="map">
      </iframe> -->
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from '~/components/NavigationBar.vue'
import Footer from '~/components/Footer.vue'
import firebase from "~/plugins/firebase.js"

export default {
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      news: [
        {
          "date": "2019/12/03",
          "title": "会社を設立しました"
        },
        {
          "date": "2020/01/01",
          "title": "謹賀新年 今年も精進します"
        },
        {
          "date": "2020/03/01",
          "title": "事務所OPEN！"
        },
        {
          "date": "2020/11/20",
          "title": "順調にプロダクトの開発が進んでいます！"
        },
        {
          "date": "2020/11/29",
          "title": "サイトリニューアルのお知らせ"
        }
      ],
      navi:""
    }
  },
  mounted: function(){
    this.navi = document.getElementsByClassName("navi")[0];
  },
  methods: {
    sendMail() {
      let text=[];
      let company = document.getElementById("company").value
      let email = document.getElementById("email").value;
      let first = document.getElementById("firstname").value;
      let last = document.getElementById("lastname").value;
      let inquiry = document.getElementById("inquiry").value;
      if(!company){
        text.push("会社名");
      }
      if(!first){
        text.push("姓");
      }
      if(!last){
        text.push("名");
      }
      if(email.indexOf('@') == -1){
        text.push("メールアドレス");
      }
      if(inquiry == "null"){
        text.push("お問い合わせ内容");
      }
      if(text != ""){
        alert(text.join(",")+" を入力してください");
        return
      }
      const send = firebase.functions().httpsCallable("sendMail");
      send({email: email, first: first, last: last, inquiry: inquiry, company: company})
      .then(function(data) {
        console.log(data)
        alert("送信しました。");
      })
      .catch(function(error) {
        alert("送信に失敗しました。");
      })
    },

    product_scroll: function(){
      let rect
      rect = document.getElementsByClassName("firstPanel")[0].getBoundingClientRect();
      window.scroll(0,window.pageYOffset + rect.top)
    },

    news_scroll: function(){
      let rect
      rect = document.getElementsByClassName("thirdPanel")[0].getBoundingClientRect();
      window.scroll(0,window.pageYOffset + rect.top - this.navi.clientHeight)
    },

    contact_scroll: function(){
      let rect
      rect = document.getElementsByClassName("fourthPanel")[0].getBoundingClientRect();
      window.scroll(0,window.pageYOffset + rect.top - this.navi.clientHeight)
    },

    information_scroll: function(){
      let rect
      rect = document.getElementsByClassName("fifthPanel")[0].getBoundingClientRect();
      window.scroll(0,window.pageYOffset + rect.top - this.navi.clientHeight)
    }
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

body, html {
  margin: 0;
  padding: 0;
}

input {
  margin-top: 18px;
  width: 65%;
  height: 87px;
  font-size: 32px;
  padding-left: 30px;
  background: #f6f6f6;
  border: none;

  @media screen and (max-width: 1000px) {
    height: 50px;
    font-size: 20px;
  }

  @media screen and (max-width: 600px) {
    margin-top: 14px;
    height: 30px;
    padding-left: 15px;
    padding-left: 5%;
    font-size: 14px;
  }
}

//FIXME: 三角形を出したい
select {
  position: relative;
  margin-top: 18px;
  width: 65%;
  height: 87px;
  font-size: 32px;
  padding-left: 30px;
  background: #f6f6f6;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(../static/image/triangle.png) right 50% no-repeat, -webkit-linear-gradient(top, #fff 0%,#efebe1 100%);
  background: url(../static/image/triangle.png) right 50% no-repeat, linear-gradient(top, #fff 0%,#efebe1 100%);
  background-size: 20px, 100%;

 //画像をselect要素内に出すための仕組み
  background-image: url(../static/image/tri_button.png);
  background-repeat: no-repeat;
  background-position: 95%; /* 背景画像を若干右に移動 */
  
  @media screen and (max-width: 1000px) {
    height: 50px;
    font-size: 20px;
  }

  @media screen and (max-width: 600px) {
    margin-top: 14px;
    height: 30px;
    padding-left: 15px;
    padding-left: 5%;
    font-size: 14px;
  }
}

.shortInput {
  width: 40%;
}

.down-arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.container {
  margin: 0;
  padding: 0;
  background: #fafafa;
  overflow-x: hidden;
  //animation: fadeIn 1s ease 1s 1 normal;

  .navi {
    position: fixed;
    top: 0;
    left: 0;

    //FIXME: 影の付け方が雑
    z-index: 2;
  }

  .firstPanel {
    position: relative;
    top: 0;
    left: 0;
    z-index: 3;

    height: 1060px;
    width: 100%;

    @media screen and (max-width: 1570px) {
      height: 750px;
    }

    @media screen and (max-width: 1200px) {
      height: 600px;
    }

    @media screen and (max-width: 1000px) {
      height: 550px;
    }

    @media screen and (max-width: 600px) {
      height: 500px;
    }

    background: #fafafa;

    .bar {
      position: relative;
      top: 100px;
      left: 50%;

      width: 80%;

      @media screen and (max-width: 600px) {
        top: 10px;
        width: 100%;
        padding-left: 5%;
        z-index: 2;
        background: #fafafa;
      }

      transform: translateX(-50%);
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);

      .papillon {
        .logo {
          position: relative;
          height: 80px;
          width: 80px;

          @media screen and (max-width: 1000px) {
            width: 48px;
            height: 48px;
          }

          @media screen and (max-width: 600px) {
            width: 26px;
            height: 26px;
          }
        }
      }
      .papillon:after {
        content: "Papillon";
        position: absolute;
        top: 16px;
        margin-left: 5px;

        font-weight: 900;
        font-size: 36px;
        font-family: 'Roboto', sans-serif;
        color: #212121;

        @media screen and (max-width: 1000px) {
          top: 10px;
          font-size: 28px;
        }

        @media screen and (max-width: 600px) {
          top: 6px;
          margin-left: 3px;
          font-size: 12px;
          z-index: 3;
        }
      }

      .menu {
        position: absolute;
        top: 20px;
        right: 5%;
        color: #767676;

        @media screen and (max-width: 1000px) {
          top: 10px;
        }

        @media screen and (max-width: 600px) {
          top: 2px;
        }

        .product {
          position: relative;
          right: 60px;
          font-size: 30px;
          font-weight: 500;
          text-align: right;
          cursor: pointer;

          @media screen and (max-width: 1000px) {
            right: 36px;
            font-size: 24px;
          }

          @media screen and (max-width: 600px) {
            right: 16px;
            font-size: 12px;
          }
        }

        .news {
          position: relative;
          right: 40px;
          font-size: 30px;
          font-weight: 500;
          text-align: right;
          cursor: pointer;

          @media screen and (max-width: 1000px) {
            right: 27px;
            font-size: 24px;
          }

          @media screen and (max-width: 600px) {
            right: 12px;
            font-size: 12px;
          }
        }

        .contact {
          position: relative;
          right: 20px;
          font-size: 30px;
          font-weight: 500;
          text-align: right;
          cursor: pointer;

          @media screen and (max-width: 1000px) {
            right: 18px;
            font-size: 24px;
          }

          @media screen and (max-width: 600px) {
            right: 8px;
            font-size: 12px;
          }
        }

        .info {
          position: relative;
          font-size: 30px;
          font-weight: 500;
          text-align: right;
          cursor: pointer;

          @media screen and (max-width: 1000px) {
            right: 9px;
            font-size: 24px;
          }

          @media screen and (max-width: 600px) {
            right: 4px;
            font-size: 12px;
          }
        }
      }
    }

    .ossanSquare {
      position: relative;
      top: 0px;
      width: 100%;

      @media screen and (min-width: 600px) {
        display: none;
      }
    }

    .textBlock {
      position: relative;
      margin-top: 300px;
      left: 51%;

      width: 80%;

      transform: translateX(-50%);
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);

      @media screen and (max-width: 1570px) {
        margin-top: 250px;
      }

      @media screen and (max-width: 1200px) {
        margin-top: 150px;
      }

      @media screen and (max-width: 1000px) {
        right: 9px;
        font-size: 24px;
      }

      @media screen and (max-width: 600px) {
        margin-top: 20px;
        left: 45%;
      }

      .toSport {
        position: relative;
        color: #212121;
        font-size: 32px;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 700;
        letter-spacing: 1.15px;

        @media screen and (max-width: 1570px) {
          font-size: 24px;
        }

        @media screen and (max-width: 1200px) {
          font-size: 18px;
        }

        @media screen and (max-width: 1000px) {
          font-size: 14px;
        }

        @media screen and (max-width: 600px) {
          font-size: 12px;
        }
      }

      .eplayersPos {
        position: relative;
        margin-top: 25px;

        @media screen and (max-width: 600px) {
          margin-top: 5px;
        }

        .eplayers {
          margin-top: 30px;
          margin-left: 15px;

          color: #BE2B50;
          position: absolute;

          font-weight: 900;
          font-size: 52px;
          font-family: 'Roboto', sans-serif;

          @media screen and (max-width: 1570px) {
            font-size: 32px;
          }

          @media screen and (max-width: 1200px) {
            font-size: 24px;
          }

          @media screen and (max-width: 1000px) {
            font-size: 20px;
          }

          @media screen and (max-width: 600px) {
            margin-top: 14px;
            margin-left: 5px;
            font-size: 16px;
          }

          .praise {
            color: #212121;
            font-size: 36px;
            margin-left: 2px;
            font-family: 'Noto Sans JP', sans-serif;

            font-weight: 500;

            @media screen and (max-width: 1570px) {
              font-size: 28px;
            }

            @media screen and (max-width: 1200px) {
              font-size: 22px;
            }

            @media screen and (max-width: 1000px) {
              font-size: 18px;
            }

            @media screen and (max-width: 600px) {
              font-size: 12px;
            }
          }
        }
      }
      .eplayersPos::before {
        position: relative;
        content: url(../static/image/logo.png);
        margin-top: 25px;

        @media screen and (max-width: 1570px) {
          margin-top: 10px;
          display: inline-block;
          height: 82px;
          width: 82px;
          content: '';
          background-image: url(../static/image/logo.png);
          background-size: contain;
          vertical-align: middle;
        }

        @media screen and (max-width: 1200px) {
          margin-top: 15px;
          display: inline-block;
          height: 64px;
          width: 64px;
          content: '';
          background-image: url(../static/image/logo.png);
          background-size: contain;
          vertical-align: middle;
        }

        @media screen and (max-width: 1000px) {
          margin-top: 15px;
          display: inline-block;
          height: 52px;
          width: 52px;
          content: '';
          background-image: url(../static/image/logo.png);
          background-size: contain;
          vertical-align: middle;
        }

        @media screen and (max-width: 600px) {
          margin-top: 10px;
          display: inline-block;
          height: 28px;
          width: 28px;
          content: '';
          background-image: url(../static/image/logo.png);
          background-size: contain;
          vertical-align: middle;
        }
      }

      .content {
        position: relative;
        top: 65px;
        color: #555;
        font-size: 28px;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 500;
        line-height: 29px;

        @media screen and (max-width: 1570px) {
          top: 40px;
          font-size: 22px;
          line-height: 23px;
        }

        @media screen and (max-width: 1200px) {
          top: 30px;
          font-size: 21px;
          line-height: 26px;
        }

        @media screen and (max-width: 1000px) {
          top: 35px;
          font-size: 18px;
          line-height: 24px;
        }

        @media screen and (max-width: 600px) {
          top: 20px;
          font-size: 14px;
          line-height: 19px;
          margin-bottom: 30px;
        }

        .eplayers {
          color: #BE2B50;
          font-family: 'Noto Sans JP', sans-serif;
          margin-right: 3px;
        }
      }

      .ossan {
        position: absolute;

        top: -150px;
        right: -90px;
        width: 730px;
        height: 730px;

        @media screen and (max-width: 1570px) {
          top: -80px;
          right: -30px;
          width: 500px;
          height: 500px;
        }

        @media screen and (max-width: 1200px) {
          top: -60px;
          right: -20px;
          width: 400px;
          height: 400px;
        }

        @media screen and (max-width: 1000px) {
          top: -50px;
          right: -15px;
          width: 350px;
          height: 350px;
        }

        @media screen and (max-width: 600px) {
          display: none;
        }
      }
    }
  }

  .secondPanel {
    position: relative;
    margin-top: 80px;
    padding-left: 15px;
    background: #7565E1;

    height: 1000px;
    width: 100%;

    @media screen and (max-width: 1570px) {
      height: 600px;
    }

    @media screen and (max-width: 1000px) {
      height: 560px;
    }

    @media screen and (max-width: 600px) {
      margin-top: 30px;
      height: 460px;
    }

    .textBlock {
      position: relative;

      top: 50%;
      left: 10%;
      color: white;
      font-size: 28px;
      line-height: 35px;
      font-family: 'Noto Sans JP', sans-serif;

      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);

      @media screen and (max-width: 1570px) {
        font-size: 22px;
        line-height: 29px;
      }

      @media screen and (max-width: 1000px) {
        font-size: 18px;
        line-height: 20px;
      }

      @media screen and (max-width: 600px) {
        top: 30px;
        left: 16px;
        font-size: 14px;
        line-height: 18px;

        transform: translateY(0%);
        -webkit-transform: translateY(0%);
        -moz-transform: translateY(0%);
      }

      .title {
        font-weight: 700;
        font-size: 36px;
        font-family: 'Roboto', sans-serif;

        @media screen and (max-width: 1000px) {
          font-size: 28px;
        }

        @media screen and (max-width: 600px) {
          font-size: 22px;
        }
      }

      .highlight {
        color: #E2FF1A;
      }
    }

    //FIXME: 配置めちゃくちゃ
    .image {
      position: absolute;
      top: 50%;
      right: 10%;

      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);

      @media screen and (max-width: 600px) {
        top: 270px;
        left: 14px;
      }
    }
    .image:before {
      content: url("../static/image/menu.png");
      margin-right: 80px;

      @media screen and (max-width: 1570px) {
        right: 40%;
        position: relative;
        display: inline-block;
        width: 190px;
        height: 380px;
        content: '';
        background-image: url(../static/image/menu.png);
        background-size: contain;
        vertical-align: middle;
      }

      @media screen and (max-width: 1000px) {
        right: 40%;
        position: relative;
        display: inline-block;
        width: 170px;
        height: 340px;
        content: '';
        background-image: url(../static/image/menu.png);
        background-size: contain;
        vertical-align: middle;
      }

      @media screen and (max-width: 600px) {
        position: relative;
        top: 50px;
        left: 140px;
        display: inline-block;
        width: 110px;
        height: 220px;
        content: '';
        background-image: url(../static/image/menu.png);
        background-size: contain;
        vertical-align: middle;
      }
    }
    .image2 {
      @media screen and (max-width: 1570px) {
        position: absolute;
        width: 190px;
        height: 380px;
        right: 0%;
      }

      @media screen and (max-width: 1000px) {
        position: absolute;
        width: 170px;
        height: 340px;
        right: 0%;
      }
      
      @media screen and (max-width: 600px) {
        position: absolute;
        width: 110px;
        height: 220px;
        top: 49px;
        left: 16px;
      }
    }
  }

  .thirdPanel {
    position: relative;
    height: 850px;
    background: white;

    @media screen and (max-width: 1570px) {
      height: 750px;
    }

    @media screen and (max-width: 1000px) {
      height: 500px;
    }

    @media screen and (max-width: 600px) {
      height: 350px;
    }

    .title {
      position: relative;
      top: 100px;
      left: 200px;

      color: #212121;
      font-size: 30px;
      font-family: 'Roboto', sans-serif;

      @media screen and (max-width: 1570px) {
        left: 152px;
      }

      @media screen and (max-width: 1000px) {
        top: 50px;
        font-size: 26px;
      }

      @media screen and (max-width: 600px) {
        top: 30px;
        left: 30px;
        font-size: 20px;
      }
    }

    .detail {
      position: relative;
      top: 10px;
      left: -24px;
      margin-bottom: 100px;

      color: #767676;
      font-size: 28px;
      font-family: 'Noto Sans JP', sans-serif;

      @media screen and (max-width: 1570px) {
        margin-bottom: 75px;
      }

      @media screen and (max-width: 1000px) {
        font-size: 24px;
        margin-bottom: 60px;
      }

      @media screen and (max-width: 600px) {
        top: 5px;
        font-size: 16px;
        left: -14px;
        margin-bottom: 40px;
      }
    }

    .banner {
      position: relative;
      color: #212121;
      font-size: 26px;
      margin-top: 36px;
      left: -24px;
      cursor: pointer;

      @media screen and (max-width: 1000px) {
        font-size: 20px;
        margin-top: 24px;
      }

      @media screen and (max-width: 600px) {
        font-size: 14px;
        left: -14px;
        margin-top: 12px;
      }

      .bannerDate {
        color: #767676;
      }

      .bannerTitle {
        position: absolute;
        left: 200px;

        @media screen and (max-width: 600px) {
          left: 100px;
        }
      }
    }

    .seeDetail {
      position: relative;
      top: 50px;
      height: 60px;
      width: auto;
      padding-left: 110px;
      padding-right: 110px;
      padding-top: 10px;
      padding-bottom: 10px;
      color: white;
      font-size: 24px;
      //background: black;
      background: #b5b5b5;
      border-radius: 26px;
      text-align: center;
      font-family: 'Noto Sans JP', sans-serif;
      cursor:default;

      @media screen and (max-width: 1000px) {
        top: 30px;
        height: 40px;
      }

      @media screen and (max-width: 600px) {
        top:25px;
        height: 20px;
        width: auto;
        padding-left: 35px;
        padding-right: 35px;
        font-size: 12px;
      }
    }
  }

  .fourthPanel {
    position: relative;
    height: 1340px;
    width: 100%;

    @media screen and (max-width: 1570px) {
      height: 1260px;
    }

    @media screen and (max-width: 1000px) {
      height: 900px;
    }

    @media screen and (max-width: 600px) {
      height: 650px;
    }

    .title {
      position: relative;
      top: 100px;
      left: 200px;

      color: #212121;
      font-size: 30px;
      font-family: 'Roboto', sans-serif;

      @media screen and (max-width: 1570px) {
        left: 152px;
      }

      @media screen and (max-width: 1000px) {
        top: 50px;
        font-size: 26px;
      }

      @media screen and (max-width: 600px) {
        top: 30px;
        left: 30px;
        font-size: 20px;
      }
    }
    .detail {
      position: relative;
      top: 10px;
      left: -24px;

      color: #767676;
      font-size: 28px;
      font-family: 'Noto Sans JP', sans-serif;

      @media screen and (max-width: 1000px) {
        font-size: 24px;
        margin-bottom: 60px;
      }

      @media screen and (max-width: 600px) {
        top: 5px;
        font-size: 16px;
        left: -14px;
        margin-bottom: 40px;
      }
    }

    .forms {
      position: relative;
      top: 80px;
      left: -24px;

      @media screen and (max-width: 1570px) {
        top: 55px;
      }

      @media screen and (max-width: 1000px) {
        top: 30px;
      }

      .sendButton{
        position: relative;
        top: 50px;
        height: 60px;
        width: auto;
        padding-left: 110px;
        padding-right: 110px;
        padding-top: 10px;
        padding-bottom: 10px;
        color: white;
        font-size: 24px;
        //background: black;
        background: #7565e1;
        border-radius: 26px;
        text-align: center;
        font-family: 'Noto Sans JP', sans-serif;
        cursor: pointer;

        @media screen and (max-width: 600px) {
          top: 25px;
          height: 20px;
          width: auto;
          padding-left: 35px;
          padding-right: 35px;
          font-size: 12px;
        }
      }

      .policy{
        position: relative;
        padding-top: 50px;
        padding-bottom: -20px;
        font-size: 14px;
        color: #767676;

        .br-pc { display:none; }
        .br-sp { display:block; }
        @media screen and (max-width: 600px) {
          padding-top: 20px;
          font-size: 8px;
          .br-pc { display:block; }
          .br-sp { display:none; }
        }
      }

      @media screen and (max-width: 600px) {
        top: 10px;
        left: -14px;
      }

      .topic {
        color: #212121;
        margin-top: 30px;
        font-size: 26px;
        font-weight: 500;
        font-family: 'Noto Sans JP', sans-serif;

        @media screen and (max-width: 1000px) {
          margin-top: 25px;
          font-size: 22px;
        }

        @media screen and (max-width: 600px) {
          margin-top: 20px;
          font-size: 14px;
        }
      }
    }
  }

  .fifthPanel {
    position: relative;
    background: #F5F7FA;
    height: 600px;
    width: 100%;

    @media screen and (max-width: 600px) {
      height: 270px;
    }

    .title {
      position: relative;
      top: 100px;
      left: 200px;
      margin-bottom: 150px;

      color: #212121;
      font-size: 30px;
      font-family: 'Roboto', sans-serif;

      @media screen and (max-width: 1570px) {
        left: 152px;
      }

      @media screen and (max-width: 1000px) {
        top: 70px;
        font-size: 28px;
      }

      @media screen and (max-width: 600px) {
        top: 30px;
        left: 30px;
        font-size: 20px;
        margin-bottom: 55px;
      }
    }
    .detail {
      position: relative;
      top: 10px;
      left: -24px;

      color: #767676;
      font-size: 28px;
      font-family: 'Noto Sans JP', sans-serif;

      @media screen and (max-width: 1000px) {
        font-size: 24px;
      }

      @media screen and (max-width: 600px) {
        top: 5px;
        font-size: 16px;
        left: -14px;
        margin-bottom: 10px;
      }
    }

    .info {
      position: relative;
      left: 176px;
      margin-top: 40px;

      @media screen and (max-width: 1570px) {
        left: 130px;
      }

      @media screen and (max-width: 600px) {
        left: 5%;
        margin-top: 20px;
      }

      .key {
        position: relative;
        color: #767676;
        font-size: 26px;

        @media screen and (max-width: 1000px) {
          font-size: 20px;
        }

        @media screen and (max-width: 600px) {
          font-size: 14px;
        }
      }
      .content {
        position: absolute;
        left: 170px;
        color: #212121;
        font-size: 26px;

        @media screen and (max-width: 1000px) {
          font-size: 20px;
        }

        @media screen and (max-width: 600px) {
          font-size: 14px;
        }
      }
    }

    .map {
      position: absolute;
      right: 10%;
      top: 100px;

      @media screen and (max-width: 600px) {
        top: 300px;
        left: 50%;
        width: 300px;
        height: 240px;

        transform: translateX(-50%);
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
      }
    }
  }
}

.purpleDot {
  position: absolute;
  top: 8px;
  left: -24px;

  background: #7565E1;
  width: 16px;
  height: 16px;
  border-radius: 10px;

  @media screen and (max-width: 600px) {
    top: 7px;
    left: -14px;
    width: 10px;
    height: 10px;
  }
}

@keyframes fadeIn {
  0% {opacity: 0}
  100% {opacity: 1}
}

.page-enter-active, .page-leave-active {
  transition: opacity 0.1s
}
.page-enter, .page-leave-active {
  opacity: 0
}

</style>
