import useSound from "use-sound";
import C3 from "./sound/C3.mp3";
import Db3 from "./sound/Db3.mp3";
import D3 from "./sound/D3.mp3";
import Eb3 from "./sound/Eb3.mp3";
import E3 from "./sound/E3.mp3";
import F3 from "./sound/F3.mp3";
import Gb3 from "./sound/Gb3.mp3";
import G3 from "./sound/G3.mp3";
import Ab3 from "./sound/Ab3.mp3";
import A3 from "./sound/A3.mp3";
import Bb3 from "./sound/Bb3.mp3";//一括代入の方法
import B3 from "./sound/B3.mp3"; 
import C4 from "./sound/C4.mp3";
import Db4 from "./sound/Db4.mp3";
import D4 from "./sound/D4.mp3";
import Eb4 from "./sound/Eb4.mp3";
import E4 from "./sound/E4.mp3";
import F4 from "./sound/F4.mp3";
import Gb4 from "./sound/Gb4.mp3";
import G4 from "./sound/G4.mp3";
import Ab4 from "./sound/Ab4.mp3";
import A4 from "./sound/A4.mp3";
import Bb4 from "./sound/Bb4.mp3";
import B4 from "./sound/B4.mp3";

import { useState } from "react";
import { MemoChord } from "./components/MemoChord";
//関数はメモ化しとけ
export const App = () => {
    console.log("Appレンダリング");
    //プレイストップ各設定
    const [playC3, { stop: stopC3 }] = useSound(C3);
    const [playDb3, { stop: stopDb3 }] = useSound(Db3);
    const [playD3, { stop: stopD3 }] = useSound(D3);
    const [playEb3, { stop: stopEb3 }] = useSound(Eb3);
    const [playE3, { stop: stopE3 }] = useSound(E3);
    const [playF3, { stop: stopF3 }] = useSound(F3);
    const [playGb3, { stop: stopGb3 }] = useSound(Gb3);
    const [playG3, { stop: stopG3 }] = useSound(G3);
    const [playAb3, { stop: stopAb3 }] = useSound(Ab3);
    const [playA3, { stop: stopA3 }] = useSound(A3);
    const [playBb3, { stop: stopBb3 }] = useSound(Bb3);
    const [playB3, { stop: stopB3 }] = useSound(B3);
    const [playC4, { stop: stopC4 }] = useSound(C4);
    const [playDb4, { stop: stopDb4 }] = useSound(Db4);
    const [playD4, { stop: stopD4 }] = useSound(D4);
    const [playEb4, { stop: stopEb4 }] = useSound(Eb4);
    const [playE4, { stop: stopE4 }] = useSound(E4);
    const [playF4, { stop: stopF4 }] = useSound(F4);
    const [playGb4, { stop: stopGb4 }] = useSound(Gb4);
    const [playG4, { stop: stopG4 }] = useSound(G4);
    const [playAb4, { stop: stopAb4 }] = useSound(Ab4);
    const [playA4, { stop: stopA4 }] = useSound(A4);
    const [playBb4, { stop: stopBb4 }] = useSound(Bb4);
    const [playB4, { stop: stopB4 }] = useSound(B4);
    //state: 入力されたコードを保持
    const [memoChord, setMemoChord] = useState([]);

    //ルートリスト
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

    //play関数リスト
    const PlayFuncs = [
        () => playC3(),
        () => playDb3(),
        () => playD3(),
        () => playEb3(),
        () => playE3(),
        () => playF3(),
        () => playGb3(),
        () => playG3(),
        () => playAb3(),
        () => playA3(),
        () => playBb3(),
        () => playB3(),
        () => playC4(),
        () => playDb4(),
        () => playD4(),
        () => playEb4(),
        () => playE4(),
        () => playF4(),
        () => playGb4(),
        () => playG4(),
        () => playAb4(),
        () => playA4(),
        () => playBb4(),
        () => playB4(), //全24音
    ];
    //stop関数リスト
    const StopFuncs = [
        () => stopC3(),
        () => stopDb3(),
        () => stopD3(),
        () => stopEb3(),
        () => stopE3(),
        () => stopF3(),
        () => stopGb3(),
        () => stopG3(),
        () => stopAb3(),
        () => stopA3(),
        () => stopBb3(),
        () => stopB3(),
        () => stopC4(),
        () => stopDb4(),
        () => stopD4(),
        () => stopEb4(),
        () => stopE4(),
        () => stopF4(),
        () => stopGb4(),
        () => stopG4(),
        () => stopAb4(),
        () => stopA4(),
        () => stopBb4(),
        () => stopB4(), //全24音
    ];
    const Chords = { //数字はルートからの半音の距離
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
    };

    //関数: 新しく入力されたコードを反映、配列に入れる
    const addChord = (newChord) => {
        console.log("addChord実行");
        setMemoChord([...memoChord, newChord]);
        
    }
    //関数： ノートリストを返す
    const getnoteList = (chord) => { 
        console.log(`getnoteList${chord}実行\n`);
        const root = chord.slice(0, 2); //先頭2文字のみ
        const structure = chord.slice(2); //先頭2文字以外
        
        const noteList = [...Chords[structure]]; //Chordsを元に配列を新しく生成
        for (let i = 0; i < noteList.length; i++) {
            noteList[i] += roots[root];
        }
        
        return noteList;
    };
    
    //関数: 引数でプレイするコードを選ぶ
    const play = (chord) => {
        console.log(`play${chord}実行`);
        const noteList = getnoteList(chord); //C[0, 4, 7]
        
        for (let i = 0; i < noteList.length; i++) {
            PlayFuncs[noteList[i]]();
        }
    };
    //関数: 引数でストップするコードを選ぶ
    const stop = (chord) => {
        console.log(`stop${chord}実行`);
        const noteList = getnoteList(chord); //C[0, 4, 7]
        
        for (let i = 0; i < noteList.length; i++) {
            StopFuncs[noteList[i]]();
        }
    };
    //関数: スリープ(意味不なのでコピペ) //await _sleep(2000);
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    
    //関数: 入力されたすべてのコードを再生
    const playBack = () => {
        (async () => {
            for (let i = 0; i < memoChord.length; i++) {
                console.log(`${i}回目`);
                play(memoChord[i]);
                await sleep(1000);
                stop(memoChord[i]);
            }
        })();
    };

    //関数: memoChordをリセット
    const resetMemoChord = () => {
        setMemoChord([]);
    };
    
    return (
        <>
            <h1>ChordFinding</h1>
            
            <button onMouseEnter={() => play("C_")} onMouseLeave={() => stop("C_")} onClick={() => addChord("C_")}>
                C
            </button>
            <button onMouseEnter={() => play("G_")} onMouseLeave={() => stop("G_")} onClick={() => addChord("G_")}>
                G
            </button>
            <button onMouseEnter={() => play("A_m")} onMouseLeave={() => stop("A_m")} onClick={() => addChord("A_m")}>
                Am
            </button>
            <button onMouseEnter={() => play("E_m")} onMouseLeave={() => stop("E_m")} onClick={() => addChord("E_m")}>
                Em
            </button>
            <button onMouseEnter={() => play("F_")} onMouseLeave={() => stop("F_")} onClick={() => addChord("F_")}>
                F
            </button>
            <button onMouseEnter={() => play("C_")} onMouseLeave={() => stop("C_")} onClick={() => addChord("C_")}>
                C
            </button>
            <button onMouseEnter={() => play("F_")} onMouseLeave={() => stop("F_")} onClick={() => addChord("F_")}>
                F
            </button>
            <button onMouseEnter={() => play("G_")} onMouseLeave={() => stop("G_")} onClick={() => addChord("G_")}>
                G
            </button>
            <button onMouseEnter={() => play("D_m7")} onMouseLeave={() => stop("D_m7")} onClick={() => addChord("D_m7")}>
                D_m7
            </button>
            <button onMouseEnter={() => play("C_mM7")} onMouseLeave={() => stop("C_add9")} onClick={() => addChord("C_add9")}>
                C_add9
            </button>
            
            <MemoChord memoChord={memoChord} />
            <button onClick={playBack}>再生</button>
            <button onClick={resetMemoChord}>リセット</button>
        </>
        //関数の入れ方で動かなくなるのなに？？？？？
    );
}

//<NowChord />



//onMouseOver






/*
import useSound from "use-sound";
import C from "./sound/C.mp3";
import D from "./sound/D.mp3";
import { useState } from "react";
export const App = () => {
    const [isClick, setIsClick] = useState(false);
    const [playC, { stop }] = useSound(C);
    const [playD] = useSound(D);
    const onMouseOver = () => {
        p();
    };
    
    const stopSound = () => {
        console.log("stopSound実行");
        stop();
    }

    const memoChord = () => {
        console.log("memoChord実行");
        return (
            <>
                <p>bomb!→</p>
            </>
        )
    }
    if (isClick) p();
    return (
        <>
            <p>Hello World!</p>
            <button onMouseEnter={() => playC} onMouseLeave={stopSound} onClick={memoChord}>
                C
            </button>
            <button onMouseEnter={playSound} onMouseLeave={stopSound} onClick={memoChord}>
                D
            </button>
        </>
        
    );
};
//onMouseOver
 */