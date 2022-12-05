const play = (chord) => { //コードの配列を返す
    console.log(`play${chord}実行\n`);
    const root = chord.slice(0, 2); //先頭2文字のみ C もしかしたら_Cとかになるかも
    const structure = chord.slice(2); //先頭2文字以外 7sus4
    const roots = {
        "C_": 0,
        "Db": 1,
        "D_": 2,
        "Eb": 3,
        "E_": 4,
        "F_": 5,
        "Gb": 6,
        "G_": 7,
        "Ab": 8,
        "A_": 9,
        "Bb": 10,
        "B_": 11, //全12個
    };
    
    //7, m, M, s, d, a, 6, それ以外（なし）
    const chords = { //ルートにそれぞれたす数？ //数字はルートからの半音の距離
        "": [0, 4, 7], //C
        "7": [0, 4, 7, 10], //C7
        "7sus4": [0, 5, 7, 10], //C7sus4
        "m": [0, 3, 7], //Cm
        "m7": [0, 3, 7, 10], //Cm7
        "m7-5": [0, 3, 6, 10], //Cm7-5
        "mM7": [0, 3, 7, 11], //CmM7
        "m6": [0, 3, 7, 9], //Cm6
        "M7": [0, 4, 7, 11], //CM7
        "sus4": [0, 5, 7], //Csys4
        "dim": [0, 3, 6, 9], //Cdim7
        "aug": [0, 4, 8], //Caug
        "add9": [0, 4, 7, 14], //Cadd9 あってる？？？
        "6": [0, 4, 7, 9], //C6
        //C5 p75
        //CM9 p78
        //C9 p79
        //Cm9 p80
        //C6(9) p80
    }

    const chordList = chords[structure];
    for (let i = 0; i < chordList.length; i++) {
        chordList[i] += roots[root];
    }
    
    return chordList;
}
