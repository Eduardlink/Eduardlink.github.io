"use client";

import { useState } from 'react';
import "./clipboardcopy.scss";

const CopyIcon: React.FC = () => (
    <img className='imagenCopia' src='/copy.svg'></img>
);

const CheckIcon: React.FC = () => (
    <img className='imagenCopia' src='/CheckmarkCircle.svg'></img>
);

type ClipboardCopyProps = {
    copyText: string;
};

const ClipboardCopy: React.FC<ClipboardCopyProps> = ({ copyText }) => {
    const [isCopied, setIsCopied] = useState(false);

    // Function to copy text to clipboard
    async function copyTextToClipboard(text: string) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    // onClick handler for the copy button
    const handleCopyClick = () => {
        copyTextToClipboard(copyText)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 1500);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="container">
            <input className="input" type="text" value={copyText} readOnly />
            <button className="button" onClick={handleCopyClick}>
                <span>{isCopied ? <CheckIcon /> : <CopyIcon />}</span>
            </button>
        </div>
    );
};

export default ClipboardCopy;
