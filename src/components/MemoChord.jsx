
export const MemoChord = (props) => {
    const { memoChord } = props;
    let str = memoChord[0];
    for (let i = 1; i < memoChord.length; i++) {
        str = str + " -> " + memoChord[i];
    }
    
    return <p>{str}</p>;
}