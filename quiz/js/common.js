(function ($) {
    'use strict';

    //合計問題数
    let $questionTotalNum = 20;
  

    const yaminabe = [

    /* -----------------------------------------------
      県庁所在地クイズ const prefectural = [
    -------------------------------------------------- */
    
      {
        id: "01",
        question: "群馬県の県庁所在地は",
        answer01: "前橋市",
        answer02: "太田市",
        answer03: "高崎市",
        answer04: "伊勢崎市",
      },
      {
        id: "02",
        question: "静岡県の県庁所在地は",
        answer01: "静岡市",
        answer02: "浜松市",
        answer03: "富士宮市",
        answer04: "伊豆市",
      },
      {
        id: "03",
        question: "三重県の県庁所在地は",
        answer01: "津市",
        answer02: "伊勢市",
        answer03: "大津市",
        answer04: "伊賀市",
      },
      {
        id: "04",
        question: "兵庫県の県庁所在地は",
        answer01: "神戸市",
        answer02: "姫路市",
        answer03: "兵庫市",
        answer04: "宝塚市",
      },
      {
        id: "05",
        question: "福岡県の県庁所在地は",
        answer01: "福岡市",
        answer02: "北九州市",
        answer03: "宗像市",
        answer04: "新福岡市",
      },

    /* -----------------------------------------------
      アニメクイズ  const  anime = [
    -------------------------------------------------- */
   
      {
        id: "06",
        question: "ピカチュウの体重は",
        answer01: "6kg",
        answer02: "3kg",
        answer03: "10kg",
        answer04: "2kg",
      },
      {
        id: "07",
        question: "マリオの職業は",
        answer01: "配管工",
        answer02: "大工",
        answer03: "勇者",
        answer04: "消防隊",
      },
      {
        id: "08",
        question: "のび太の最初の結婚相手は誰",
        answer01: "ジャイ子",
        answer02: "しずかちゃん",
        answer03: "ドラミちゃん",
        answer04: "まる代",
      },
      {
        id: "09",
        question: "アナゴさんの年齢は",
        answer01: "２７歳",
        answer02: "３７歳",
        answer03: "５７歳",
        answer04: "４７歳",
      },
      {
        id: "10",
        question: "スプラトゥーン3の協力モードの名前は○○ランか",
        answer01: "サーモン",
        answer02: "イカ",
        answer03: "タコ",
        answer04: "マグロ",
      },
    

    /* -----------------------------------------------
      どうぶつクイズ const animal = [
    -------------------------------------------------- */
  
      {
        id: "11",
        question: "コアラが大好きなユーカリの葉には何が含まれている",
        answer01: "猛毒",
        answer02: "ビタミンC",
        answer03: "アルコール",
        answer04: "タンパク質",
      },
      {
        id: "12",
        question: "アルパカは機嫌が悪くなると何をする",
        answer01: "唾を吐く",
        answer02: "寝てしまう",
        answer03: "オナラをする",
        answer04: "大きな声で鳴く",
      },
      {
        id: "13",
        question: "カピバラが危険を感じた時の走る速さは",
        answer01: "時速５０ｋｍ",
        answer02: "時速３０ｋｍ",
        answer03: "時速２０ｋｍ",
        answer04: "時速７０ｋｍ",
      },
      {
        id: "14",
        question: "キリンの睡眠時間はどれくらいでしょう",
        answer01: "２０分",
        answer02: "２時間",
        answer03: "２分",
        answer04: "２０時間",
      },
      {
        id: "15",
        question: "ゾウの歯は何本あるでしょう",
        answer01: "４本",
        answer02: "１４本",
        answer03: "４０本",
        answer04: "４００本",
      },
  
    /* -----------------------------------------------
      たべものクイズ  const food = [
    -------------------------------------------------- */
   
      {
        id: "16",
        question: "伯方の塩はどこの塩",
        answer01: "メキシコ",
        answer02: "伯方",
        answer03: "フランス",
        answer04: "茨城",
      },
      {
        id: "17",
        question: "栄養が一番ないのは",
        answer01: "きゅうり",
        answer02: "キャベツ",
        answer03: "にんじん",
        answer04: "トマト",
      },
      {
        id: "18",
        question: "賞味期限が長いのは",
        answer01: "アイス",
        answer02: "豆腐",
        answer03: "キムチ",
        answer04: "ゼリー",
      },
      {
        id: "19",
        question: "日本生まれのパスタ料理は",
        answer01: "ナポリタン",
        answer02: "イカ墨パスタ",
        answer03: "カルボナーラ",
        answer04: "ペペロンチーノ",
      },
      {
        id: "20",
        question: "大学芋の名前の由来は",
        answer01: "大学生が好んで食べた",
        answer02: "大学生が開発した",
        answer03: "大学という土地で作った",
        answer04: "大学が開発した",
      },
    ];
   
    //質問をランダムにする
    function shuffleQuiz(array) {
      for (let i = (array.length - 1); 0 < i; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        let selected = array[i];
        array[i] = array[random];
        array[random] = selected;
      }
      return array;
    }
    let quizId = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
    shuffleQuiz(quizId);
   
    //現在の質問数
    let $currentNum = 0;
   
    //得点
    let $pointPerCorrect = 10;
   
    let questionObject = (function () {
      let Obj = function ($target) {
   
        //質問の番号
        this.$questionNumber = $target.find('.quiz-question-number');
   
        //質問文
        this.$questionName = $target.find('.quiz-question');
   
        //選択肢ボタン
        this.$questionButton = $target.find('.quiz-button');
        this.$button01 = $target.find('.button01');
        this.$button02 = $target.find('.button02');
        this.$button03 = $target.find('.button03');
        this.$button04 = $target.find('.button04');
   
        //選択肢のテキスト
        this.$answer01 = $target.find('.quiz-text01');
        this.$answer02 = $target.find('.quiz-text02');
        this.$answer03 = $target.find('.quiz-text03');
        this.$answer04 = $target.find('.quiz-text04');
   
        //score
        this.$score = $target.find('.score-wrap .score');
   
        this.init();
      };
      Obj.prototype = {
        //初回設定
        init: function () {
          //イベント登録
          this.event();
        },
        event: function () {
          let _this = this;
          let score = 0;
   
          //ウインドウ読み込み時
          $(window).on('load', function () {
            //value取得
            let value = quizId[$currentNum]; //最初は0（1番目）
            //次の質問を取得
            let nextQuestion = _this.searchQuestion(value);
            //次の質問に切り替える
            _this.changeQuestion(nextQuestion);
            //回答のシャッフル
            _this.shuffleAnswer($('.quiz-answer'));
          });
   
          //button クリック
          this.$questionButton.on("click", function () {
   
            if ($(this).hasClass('button01')) {
              $(this).parents('.quiz-answer').addClass('is-correct');
              score = score + $pointPerCorrect;
            } else {
              $(this).parents('.quiz-answer').addClass('is-incorrect');
            }
   
            $(this).addClass('is-checked');
   
            if ($currentNum + 1 == $questionTotalNum) {
              setTimeout(function () {
                $('.finish').addClass('is-show');
                $('.score-wrap .score').text(score);
              }, 1000);
            } else {
              setTimeout(function () {
                //現在の数字の更新
                $currentNum = $currentNum + 1;
   
                //次の質問番号を取得
                let value = quizId[$currentNum];
   
                //次の質問を取得
                let nextQuestion = _this.searchQuestion(value);
   
                //次の質問に切り替える
                _this.changeQuestion(nextQuestion);
   
                //クラスを取る
                _this.$questionButton.removeClass('is-checked');
                $('.quiz-answer').removeClass('is-correct').removeClass('is-incorrect');
   
                //回答のシャッフル
                _this.shuffleAnswer($('.quiz-answer'));
   
              }, 1000);
            }

      // ///////// クイズの結果へのリンク ///////// //
    
    $('a').click(function() {
      console.log(score);

      if(score === 200) {
        location.href='perfect.html';
      } else if(score < 200 && score >= 100 ) {
        location.href='nice.html';
      } else {
        location.href='bad.html';
      } 
      
    })
      // ///////// クイズの結果へのリンク ///////// //
            return false;
          });
        },
        searchQuestion: function (questionId) {
          let nextQuestion = null;
          yaminabe.forEach(function (item) {
            if (item.id == questionId) {
              nextQuestion = item;
            }
          });
          return nextQuestion;
        },
        changeQuestion: function (nextQuestion) {
          let _this = this;
   
          //質問文の入れ替え
          _this.$questionName.text(nextQuestion.question + '？');
   
          //質問番号を1つ増やす
          let numPlusOne = $currentNum + 1;
          _this.$questionNumber.text('Question ' + numPlusOne);
   
          //選択肢のテキストの入れ替え
          _this.$answer01.text(nextQuestion.answer01);
          _this.$answer02.text(nextQuestion.answer02);
          _this.$answer03.text(nextQuestion.answer03);
          _this.$answer04.text(nextQuestion.answer04);
        },
        shuffleAnswer: function (container) {
          let content = container.find("> *");
          let total = content.length;
          content.each(function () {
            content.eq(Math.floor(Math.random() * total)).prependTo(container);
          });
        },
      };
      return Obj;
    })();
   
    let quiz = $('.quiz');
    if (quiz[0]) {
      let queInstance = new questionObject(quiz);
    }



  })(jQuery);



