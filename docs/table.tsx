import { Table } from '@change/prender-rc';

export default () => {
  const columns = [
    {
      title: 'a',
      align: 'center',
      children: [
        {
          title: 'name',
          dataIndex: 'name',
          align: 'center'
          // children: [
          //   {
          //     title: 'name',
          //     dataIndex: 'name',
          //     align: 'center'
          //   }
          // ]
        },
        {
          title: 'age',
          dataIndex: 'age',
          align: 'center'
        },
      ]
    }
  ]

  const dataSource = [
    {
      age: 26,
      name: 'change'
    },
    {
      name: 'z',
      age: 28
    }
  ]
  return (
      <Table bordered columns={columns} data={dataSource} />
  )
}