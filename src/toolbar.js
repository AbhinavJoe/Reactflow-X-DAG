// toolbar.js

import React from 'react';
import { MdInput, MdOutlineOutput, MdOutlineTextSnippet, MdOutlineDataset } from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri";
import { PiVectorThreeFill } from "react-icons/pi";
import { VscSymbolEnumMember } from "react-icons/vsc";
import { MdOutlineUploadFile } from "react-icons/md";
import { TbAutomation } from "react-icons/tb";
import { DraggableNode } from './draggableNode';
import { SubmitButton } from './submit'

export const PipelineToolbar = () => {
    return (
        <div style={{ backgroundColor: 'var(--primary)', padding: '1rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '90%', margin: '0 auto' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <DraggableNode type='customInput' label='Input' icon={<MdInput />} />
                    <DraggableNode type='llm' label='LLM' icon={<RiRobot2Line />} />
                    <DraggableNode type='customOutput' label='Output' icon={<MdOutlineOutput />} />
                    <DraggableNode type='text' label='Text' icon={<MdOutlineTextSnippet />} />
                    <DraggableNode type='vectorStore' label='Vector Store' icon={<PiVectorThreeFill />} />
                    <DraggableNode type='dataStore' label='Data Store' icon={<MdOutlineDataset />} />
                    <DraggableNode type='embeddings' label='Embeddings' icon={<VscSymbolEnumMember />} />
                    <DraggableNode type='docUpload' label='Document Upload' icon={<MdOutlineUploadFile />} />
                    <DraggableNode type='automation' label='Automation' icon={<TbAutomation />} />
                    <SubmitButton />
                </div>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', cursor: 'pointer', padding: 20 }} onClick={() => window.location.reload()}>
                    @AbhinavJoe
                </span>
            </div>
        </div>
    );
};
