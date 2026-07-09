import './PropsTable.css';

export type PropsTableRow = {
  name: string;
  type: string;
  required: boolean;
  description: string;
  defaultValue?: string;
};

type PropsTableProps = {
  rows: PropsTableRow[];
};

export function PropsTable({ rows }: PropsTableProps) {
  return (
    <table className="props-table">
      <thead>
        <tr>
          <th scope="col">Prop</th>
          <th scope="col">Type</th>
          <th scope="col">Required</th>
          <th scope="col">Default</th>
          <th className="props-table__description" scope="col">
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name}>
            <td>
              <code>{row.name}</code>
            </td>
            <td>
              <code>{row.type}</code>
            </td>
            <td>{row.required ? 'Yes' : 'No'}</td>
            <td>{row.defaultValue ? <code>{row.defaultValue}</code> : '-'}</td>
            <td>{row.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

