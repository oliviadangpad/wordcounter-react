import React from 'react';
import Editor from "./Editor";
import Counter from "./Counter";
import ProgressBar from "./ProgressBar";
import SaveManager from "./SaveManager";

function WordCounter() {
    return (
        <form>
            <Editor/>
            <Counter count={500} />
            <ProgressBar completion={0.5} />
            <SaveManager/>
        </form>
    );
}

export default WordCounter;