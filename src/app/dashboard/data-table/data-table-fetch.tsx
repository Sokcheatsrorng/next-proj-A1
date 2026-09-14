
'use client'
import { Products } from '@/lib/table-data';
import useSWR from 'swr';
import { columns } from './columns';
import { DataTable } from './data-table';


// custom fetcher
const fetcher = async (url: string): Promise<Products[]> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  return res.json();
};

export default function DataTableFetch() {
  const { data, error, isLoading } = useSWR<Products[]>(
    'https://api.escuelajs.co/api/v1/products',
    fetcher
  );
 if (error) return <div>Failed to load products.</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  console.log(`===> My data: ${data} `)
  return (
    <div className="container mx-auto py-2">
      <DataTable 
      columns={columns} 
      data={data as Products[]}
       />
    </div>
  )
}
