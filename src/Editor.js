import React from 'react';

function Editor() {
    return (
        <div className="flex flex-column mv2">
            <label htmlFor="editor" className="mv2">
                Enter your text:
            </label>
            <textarea value="hello world" id="editor" />
        </div>
    );
}

export default Editor;