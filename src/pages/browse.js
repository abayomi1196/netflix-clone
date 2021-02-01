import React from 'react';

import { BrowseContainer } from '../containers/browseContainer';
import useContent from '../hooks/use-content';
import { selectionMap } from '../utils/selectionMap';

export default function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');
  const slides = selectionMap({ series, films });

  return <BrowseContainer slides={slides} />;
}
