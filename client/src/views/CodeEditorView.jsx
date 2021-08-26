import CodeMirror from 'codemirror';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Button } from '../components/Button';
import { TextInput } from '../components/TextInput';
import { ThemeTypes, useTheme } from '../contexts/Theme';
import { useAppSelector } from '../hooks/redux';
import { detectLanguage } from '../utilities/detectLanguage';

export const CodeEditorView = () => {
  const { currentTheme } = useTheme();
  const editorRef = useRef(null);
  const editorInstance = useRef(null);
  const { codeIds, codeList, locationPayload } = useAppSelector((state) => ({
    codeIds: state.code.codeIds,
    codeList: state.code.codeList,
    locationPayload: state.location.payload,
  }));
  const codeValue = useMemo(() => {
    const isValidId = typeof locationPayload.id === 'string' && codeIds.includes(locationPayload.id);
    return isValidId ? codeList[locationPayload.id] : null;
  }, [locationPayload, codeIds, codeList]);
  const [fileName, setFileName] = useState(codeValue?.fileName ?? '');
  const [source, setSource] = useState(codeValue?.source ?? '');
  const onEditorUpdate = useCallback((instance, e) => {
    setSource(instance.getValue());
  }, []);

  useEffect(() => {
    if (editorRef.current && !editorInstance.current) {
      editorInstance.current = CodeMirror(editorRef.current, {
        mode: codeValue?.fileName ? detectLanguage(codeValue.fileName) : '',
        value: codeValue?.source ?? '',
        lineNumbers: true,
      });
      editorInstance.current.setSize('100%', '100%');
      editorInstance.current.on('change', onEditorUpdate);
    }
  }, [codeValue, onEditorUpdate]); // Handling for route changes within Routes.CODE_EDITOR

  useEffect(() => {
    setFileName(codeValue?.fileName ?? '');

    if (editorInstance.current) {
      editorInstance.current.setValue(codeValue?.source ?? '');
    }
  }, [codeValue]);

  useEffect(() => {
    if (editorInstance.current) {
      const theme = currentTheme === ThemeTypes.DARK ? 'darcula' : 'idea';
      editorInstance.current.setOption('theme', theme);
    }
  }, [currentTheme]);

  function onBlurFileName(e) {
    if (!e.target.value) return;
    const languageType = detectLanguage(e.target.value);

    if (editorInstance.current) {
      editorInstance.current.setOption('mode', languageType);
    }
  }

  function onChangeFileName(e) {
    setFileName(e.target.value);
  }

  return (
    <section className="h-full flex flex-col">
      <div className="flex items-center content-center mb-4">
        <TextInput
          className="w-full font-bold mr-4"
          placeholder="File name"
          onBlur={onBlurFileName}
          onChange={onChangeFileName}
          value={fileName}
          title="File name"
        />
        <Button className="mr-4 last:mr-0" title="Save">
          💾
        </Button>
        {codeValue?.id && <Button title="Delete">🗑️</Button>}
      </div>
      <div className="h-full mb-4 overflow-hidden" ref={editorRef} />
    </section>
  );
};
