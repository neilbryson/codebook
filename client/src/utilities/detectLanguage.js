export function detectLanguage(fileName) {
  const format = fileName.split('.').pop() || '';

  switch (format.toLowerCase()) {
    case 'css':
      return 'text/css';

    case 'html':
      return 'text/html';

    case 'js':
      return 'text/javascript';

    case 'ts':
    case 'tsx':
      return 'text/typescript';

    default:
      return '';
  }
}
