if(document.body.contains(document.getElementById('converterToHi'))){
    converterToHi.addEventListener('input', function(){
        let hiragana = document.getElementById('converterToHi').value;
        hiragana = hiragana.toLowerCase()

        hiragana = hiragana.replace(/tsu/g, "つ"); 
        hiragana = hiragana.replace(/kya/g, "きゃ");
        hiragana = hiragana.replace(/kyu/g, "きゅ");
        hiragana = hiragana.replace(/kyo/g, "きょ");
        hiragana = hiragana.replace(/sha/g, "しゃ");
        hiragana = hiragana.replace(/shi/g, "し"); 
        hiragana = hiragana.replace(/shu/g, "しゅ"); 
        hiragana = hiragana.replace(/sho/g, "しょ");
        hiragana = hiragana.replace(/chi/g, "ち"); 
        hiragana = hiragana.replace(/cha/g, "ちゃ"); 
        hiragana = hiragana.replace(/chu/g, "ちゅ"); 
        hiragana = hiragana.replace(/cho/g, "ちょ"); 
        hiragana = hiragana.replace(/hya/g, "ひゃ");
        hiragana = hiragana.replace(/hyu/g, "ひゅ");
        hiragana = hiragana.replace(/hyo/g, "ひょ");
        hiragana = hiragana.replace(/rya/g, "りゃ");
        hiragana = hiragana.replace(/ryu/g, "りゅ");
        hiragana = hiragana.replace(/ryo/g, "りょ");
        hiragana = hiragana.replace(/gya/g, "ぎゃ");
        hiragana = hiragana.replace(/gyu/g, "ぎゅ");
        hiragana = hiragana.replace(/gyo/g, "ぎょ");
        hiragana = hiragana.replace(/bya/g, "びゃ");
        hiragana = hiragana.replace(/byu/g, "びゅ");
        hiragana = hiragana.replace(/byo/g, "びょ");
        hiragana = hiragana.replace(/pya/g, "ぴゃ");
        hiragana = hiragana.replace(/pyu/g, "ぴゅ");
        hiragana = hiragana.replace(/pyo/g, "ぴょ");
        hiragana = hiragana.replace(/ja/g, "じゃ");
        hiragana = hiragana.replace(/ju/g, "じゅ");
        hiragana = hiragana.replace(/jo/g, "じょ");
        
        hiragana = hiragana.replace(/ba/g, "ば"); 
        hiragana = hiragana.replace(/da/g, "だ"); 
        hiragana = hiragana.replace(/ga/g, "が"); 
        hiragana = hiragana.replace(/ha/g, "は"); 
        hiragana = hiragana.replace(/ka/g, "か"); 
        hiragana = hiragana.replace(/ma/g, "ま"); 
        hiragana = hiragana.replace(/pa/g, "ぱ"); 
        hiragana = hiragana.replace(/ra/g, "ら"); 
        hiragana = hiragana.replace(/sa/g, "さ"); 
        hiragana = hiragana.replace(/ta/g, "た"); 
        hiragana = hiragana.replace(/wa/g, "わ"); 
        hiragana = hiragana.replace(/ya/g, "や"); 
        hiragana = hiragana.replace(/za/g, "ざ");
        hiragana = hiragana.replace(/na/g, "な"); 
        hiragana = hiragana.replace(/a/g, "あ"); 

        hiragana = hiragana.replace(/be/g, "べ"); 
        hiragana = hiragana.replace(/de/g, "で"); 
        hiragana = hiragana.replace(/ge/g, "げ"); 
        hiragana = hiragana.replace(/he/g, "へ"); 
        hiragana = hiragana.replace(/ke/g, "け"); 
        hiragana = hiragana.replace(/me/g, "め"); 
        hiragana = hiragana.replace(/pe/g, "ぺ"); 
        hiragana = hiragana.replace(/re/g, "れ"); 
        hiragana = hiragana.replace(/se/g, "せ"); 
        hiragana = hiragana.replace(/te/g, "て"); 
        hiragana = hiragana.replace(/ze/g, "ぜ"); 
        hiragana = hiragana.replace(/ne/g, "ね");
        hiragana = hiragana.replace(/e/g, "え");

        hiragana = hiragana.replace(/bi/g, "び"); 
        hiragana = hiragana.replace(/gi/g, "ぎ"); 
        hiragana = hiragana.replace(/hi/g, "ひ"); 
        hiragana = hiragana.replace(/ki/g, "き"); 
        hiragana = hiragana.replace(/mi/g, "み"); 
        hiragana = hiragana.replace(/pi/g, "ぴ"); 
        hiragana = hiragana.replace(/ri/g, "り"); 
        hiragana = hiragana.replace(/ji/g, "じ"); 
        hiragana = hiragana.replace(/ni/g, "に"); 
        hiragana = hiragana.replace(/i/g, "い");

        hiragana = hiragana.replace(/bo/g, "ぼ"); 
        hiragana = hiragana.replace(/do/g, "ど"); 
        hiragana = hiragana.replace(/go/g, "ご"); 
        hiragana = hiragana.replace(/ho/g, "ほ"); 
        hiragana = hiragana.replace(/ko/g, "こ"); 
        hiragana = hiragana.replace(/mo/g, "も"); 
        hiragana = hiragana.replace(/po/g, "ぽ"); 
        hiragana = hiragana.replace(/ro/g, "ろ"); 
        hiragana = hiragana.replace(/so/g, "そ"); 
        hiragana = hiragana.replace(/to/g, "と"); 
        hiragana = hiragana.replace(/wo/g, "を"); 
        hiragana = hiragana.replace(/yo/g, "よ"); 
        hiragana = hiragana.replace(/zo/g, "ぞ"); 
        hiragana = hiragana.replace(/no/g, "の");
        hiragana = hiragana.replace(/o/g, "お"); 

        hiragana = hiragana.replace(/bu/g, "ぶ"); 
        hiragana = hiragana.replace(/gu/g, "ぐ"); 
        hiragana = hiragana.replace(/fu/g, "ふ"); 
        hiragana = hiragana.replace(/ku/g, "く"); 
        hiragana = hiragana.replace(/mu/g, "む"); 
        hiragana = hiragana.replace(/pu/g, "ぷ"); 
        hiragana = hiragana.replace(/ru/g, "る"); 
        hiragana = hiragana.replace(/su/g, "す"); 
        hiragana = hiragana.replace(/yu/g, "ゆ"); 
        hiragana = hiragana.replace(/zu/g, "ず");
        hiragana = hiragana.replace(/nu/g, "ぬ");
        hiragana = hiragana.replace(/u/g, "う");
        hiragana = hiragana.replace(/v/g, "ゔ");
        hiragana = hiragana.replace(/n/g, "ん");

        
        document.getElementById('result').value=hiragana;
    })
}
