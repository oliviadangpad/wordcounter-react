import React from 'react';
import Editor from "./Editor";
import Counter from "./Counter";
import ProgressBar from "./ProgressBar";
import SaveManager from "./SaveManager";
import countWords from "./countWords";
import makeFakeRequest from "./makeFakeRequest";

class WordCounter extends React.Component {
    constructor() {
        super();
        this.state = { text: '' }
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(newText) {
        this.setState(() => ({ text: newText}));
    }

    render() {
        const { targetWordCount } = this.props;
        const { text } = this.state;
        const wordCount = countWords(text);
        const progress = wordCount / targetWordCount;

        return (
            <form className="measure pa4 sans-serif">
                <Editor text={text} onTextChange={this.handleTextChange} />
                <Counter count={wordCount} />
                <ProgressBar completion={progress} />
                <SaveManager saveFunction={makeFakeRequest} data={this.state} />
            </form>
        )
    }
}

export default WordCounter;