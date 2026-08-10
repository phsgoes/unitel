import Paragraph from './nodes/Paragraph.astro';
import Heading from './nodes/Heading.astro';
import BulletedList from './nodes/BulletedList.astro';
import NumberedList from './nodes/NumberedList.astro';
import ListItem from './nodes/ListItem.astro';
import ListItemChild from './nodes/ListItemChild.astro';
import Quote from './nodes/Quote.astro';

import Table from './nodes/Table.astro';
import TableHead from './nodes/TableHead.astro';
import TableBody from './nodes/TableBody.astro';
import TableRow from './nodes/TableRow.astro';
import TableCell from './nodes/TableCell.astro';

import CodeBlock from './nodes/CodeBlock.astro';
import Link from './nodes/Link.astro';
import VideoEmbed from './nodes/VideoEmbed.astro';

export const registry = {
  paragraph: Paragraph,

  'heading-one': Heading,
  'heading-two': Heading,
  'heading-three': Heading,
  'heading-four': Heading,
  'heading-five': Heading,
  'heading-six': Heading,

  'bulleted-list': BulletedList,
  'numbered-list': NumberedList,
  'list-item': ListItem,
  'list-item-child': ListItemChild,

  'block-quote': Quote,

  table: Table,
  table_head: TableHead,
  table_body: TableBody,
  table_row: TableRow,
  table_cell: TableCell,
  table_header_cell: TableCell,

  'code-block': CodeBlock,
  link: Link,
  video: VideoEmbed,
} as const;