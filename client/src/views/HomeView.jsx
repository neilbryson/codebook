import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CodePreview } from '../components/CodePreview';
import { getCodeList } from '../redux/code/actions';
import { navigateTo } from '../redux/routing/navigateTo';
import { Routes } from '../redux/routing/routesMap';

export const HomeView = () => {
  const dispatch = useDispatch();
  const { codeIds, codeList } = useSelector((state) => ({
    codeIds: state.code.codeIds,
    codeList: state.code.codeList,
  }));

  useEffect(() => {
    dispatch(getCodeList());
  }, [dispatch]);

  function onClickPreview(id) {
    return () =>
      dispatch(
        navigateTo(Routes.CODE_EDITOR, {
          id,
        })
      );
  }

  function renderList() {
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
