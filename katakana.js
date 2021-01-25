if(document.body.contains(document.getElementById('converterToKa'))){
    converterToKa.addEventListener('input', function(){
        let katakana = document.getElementById('converterToKa').value;
        katakana = katakana.toLowerCase()

        katakana = katakana.replace(/tsu/g, "ツ"  ); 
        katakana = katakana.replace(/kya/g, "キャ");
        katakana = katakana.replace(/kyu/g, "キュ");
        katakana = katakana.replace(/kyo/g, "キョ");
        katakana = katakana.replace(/sha/g, "シャ");
        katakana = katakana.replace(/shi/g, "シ"  ); 
        katakana = katakana.replace(/shu/g, "シュ"); 
        katakana = katakana.replace(/sho/g, "ショ");
        katakana = katakana.replace(/chi/g, "チ"  ); 
        katakana = katakana.replace(/cha/g, "チャ"); 
        katakana = katakana.replace(/chu/g, "チュ"); 
        katakana = katakana.replace(/cho/g, "チョ"); 
        katakana = katakana.replace(/hya/g, "ヒャ");
        katakana = katakana.replace(/hyu/g, "ヒュ");
        katakana = katakana.replace(/hyo/g, "ヒョ");
        katakana = katakana.replace(/rya/g, "リャ");
        katakana = katakana.replace(/ryu/g, "リュ");
        katakana = katakana.replace(/ryo/g, "リョ");
        katakana = katakana.replace(/gya/g, "ギャ");
        katakana = katakana.replace(/gyu/g, "ギュ");
        katakana = katakana.replace(/gyo/g, "ギョ");
        katakana = katakana.replace(/bya/g, "ビャ");
        katakana = katakana.replace(/byu/g, "ビュ");
        katakana = katakana.replace(/byo/g, "ビョ");
        katakana = katakana.replace(/pya/g, "ピャ");
        katakana = katakana.replace(/pyu/g, "ピュ");
        katakana = katakana.replace(/pyo/g, "ピョ");
        katakana = katakana.replace(/ja/g,  "ジャ");
        katakana = katakana.replace(/ju/g,  "ジュ");
        katakana = katakana.replace(/jo/g,  "ジョ");
        
        katakana = katakana.replace(/ba/g, "バ"); 
        katakana = katakana.replace(/da/g, "ダ"); 
        katakana = katakana.replace(/ga/g, "ガ"); 
        katakana = katakana.replace(/ha/g, "ハ"); 
        katakana = katakana.replace(/ka/g, "カ"); 
        katakana = katakana.replace(/ma/g, "マ"); 
        katakana = katakana.replace(/pa/g, "パ"); 
        katakana = katakana.replace(/ra/g, "ラ"); 
        katakana = katakana.replace(/sa/g, "サ"); 
        katakana = katakana.replace(/ta/g, "タ"); 
        katakana = katakana.replace(/wa/g, "ワ"); 
        katakana = katakana.replace(/ya/g, "ヤ"); 
        katakana = katakana.replace(/za/g, "ザ");
        katakana = katakana.replace(/na/g, "ナ"); 
        katakana = katakana.replace(/a/g, "ア"); 

        katakana = katakana.replace(/be/g, "ベ"); 
        katakana = katakana.replace(/de/g, "デ"); 
        katakana = katakana.replace(/ge/g, "ゲ"); 
        katakana = katakana.replace(/he/g, "ヘ"); 
        katakana = katakana.replace(/ke/g, "ケ"); 
        katakana = katakana.replace(/me/g, "メ"); 
        katakana = katakana.replace(/pe/g, "ペ"); 
        katakana = katakana.replace(/re/g, "レ"); 
        katakana = katakana.replace(/se/g, "セ"); 
        katakana = katakana.replace(/te/g, "テ"); 
        katakana = katakana.replace(/ze/g, "ゼ"); 
        katakana = katakana.replace(/ne/g, "ネ");
        katakana = katakana.replace(/e/g, "エ");

        katakana = katakana.replace(/bi/g, "ビ"); 
        katakana = katakana.replace(/gi/g, "ギ"); 
        katakana = katakana.replace(/hi/g, "ヒ"); 
        katakana = katakana.replace(/ki/g, "キ"); 
        katakana = katakana.replace(/mi/g, "ミ"); 
        katakana = katakana.replace(/pi/g, "ピ"); 
        katakana = katakana.replace(/ri/g, "リ"); 
        katakana = katakana.replace(/ji/g, "ジ"); 
        katakana = katakana.replace(/ni/g, "ニ"); 
        katakana = katakana.replace(/i/g, "イ");

        katakana = katakana.replace(/bo/g, "ボ"); 
        katakana = katakana.replace(/do/g, "ド"); 
        katakana = katakana.replace(/go/g, "ゴ"); 
        katakana = katakana.replace(/ho/g, "ホ"); 
        katakana = katakana.replace(/ko/g, "コ"); 
        katakana = katakana.replace(/mo/g, "モ"); 
        katakana = katakana.replace(/po/g, "ポ"); 
        katakana = katakana.replace(/ro/g, "ロ"); 
        katakana = katakana.replace(/so/g, "ソ"); 
        katakana = katakana.replace(/to/g, "ト"); 
        katakana = katakana.replace(/wo/g, "ヲ"); 
        katakana = katakana.replace(/yo/g, "ヨ"); 
        katakana = katakana.replace(/zo/g, "ゾ"); 
        katakana = katakana.replace(/no/g, "ノ");
        katakana = katakana.replace(/o/g, "オ"); 

        katakana = katakana.replace(/bu/g, "ブ"); 
        katakana = katakana.replace(/gu/g, "グ"); 
        katakana = katakana.replace(/fu/g, "フ"); 
        katakana = katakana.replace(/ku/g, "ク"); 
        katakana = katakana.replace(/mu/g, "ム"); 
        katakana = katakana.replace(/pu/g, "プ"); 
        katakana = katakana.replace(/ru/g, "ル"); 
        katakana = katakana.replace(/su/g, "ス"); 
        katakana = katakana.replace(/yu/g, "ユ"); 
        katakana = katakana.replace(/zu/g, "ウ");
        katakana = katakana.replace(/nu/g, "ヌ");
        katakana = katakana.replace(/u/g, "ウ");
        katakana = katakana.replace(/v/g, "ヴ");
        katakana = katakana.replace(/n/g, "ン");
        
        
        document.getElementById('result').value=katakana;
    })
}