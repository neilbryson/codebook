import React, { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { CodePreview } from '../components/CodePreview';
import { useAppSelector } from '../hooks/redux';
import { getCodeList } from '../redux/code/actions';
import { navigateTo } from '../redux/routing/navigateTo';
import { Routes } from '../redux/routing/routesMap';

export const HomeView = (): ReactElement => {
  const dispatch = useDispatch();
  const { codeIds, codeList } = useAppSelector((state) => ({
    codeIds: state.code.codeIds,
    codeList: state.code.codeList,
  }));

  useEffect(() => {
    dispatch(getCodeList());
  }, [dispatch]);

  function onClickPreview(id: string): () => void {
    return () => dispatch(navigateTo(Routes.CODE_EDITOR, { id }));
  }

  function renderList(): ReturnType<typeof CodePreview>[] {
    return codeIds.map((id) => {
      const { dateLastModified, fileName } = codeList[id];
      return (
        <CodePreview
          codeId={id}
          dateLastModified={dateLastModified}
          fileName={fileName}
          key={id}
          onClick={onClickPreview(id)}
        />
      );
    });
  }

  return <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{renderList()}</div>;
};
