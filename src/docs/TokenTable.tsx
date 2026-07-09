import theme from '../../tokens/theme.json';
import './TokenTable.css';

type TokenNode = {
  value?: string;
  [key: string]: TokenNode | string | undefined;
};

type TokenRow = {
  path: string;
  cssVariable: string;
  value: string;
};

function flattenTokens(node: TokenNode, path: string[] = []): TokenRow[] {
  if (typeof node.value === 'string') {
    const name = path.join('-');

    return [
      {
        path: path.join('.'),
        cssVariable: `--${name}`,
        value: node.value,
      },
    ];
  }

  return Object.entries(node).flatMap(([key, value]) => {
    if (key === 'value' || typeof value !== 'object' || value === null) {
      return [];
    }

    return flattenTokens(value, [...path, key]);
  });
}

function isColorValue(value: string) {
  return value.startsWith('#') || value.startsWith('rgb');
}

export function TokenTable() {
  const rows = flattenTokens(theme);

  return (
    <table className="token-table">
      <thead>
        <tr>
          <th scope="col">Token</th>
          <th scope="col">CSS Custom Property</th>
          <th scope="col">Value</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.cssVariable}>
            <td>{row.path}</td>
            <td>
              <code>{row.cssVariable}</code>
            </td>
            <td>
              {isColorValue(row.value) ? (
                <span
                  className="token-table__swatch"
                  style={{ backgroundColor: row.value }}
                  aria-hidden="true"
                />
              ) : null}
              <code>{row.value}</code>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

