import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import ReactEcharts from 'echarts-for-react'
// import echarts from 'echarts/lib/echarts'

interface Iprops {
  children?: ReactNode
}

//设置一个template，是一个对象数组， 每个对象中包含：label， validation，strategy

const Ranking: FC<Iprops> = () => {
  const startName = ['张杰', '毛不易', '李荣浩', '裤子']
  const getOption = () => ({
    title: {
      text: '明星欢迎度排名'
    },
    tooltip: {},
    xAxis: {
      data: startName
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  })

  //如果我想让E charts中的title居中，怎么修改？
  return (
    <div>
      <ReactEcharts
        option={getOption()}
        style={{ height: '350px', width: '100%' }}
        // 其他需要的属性
      />
      g
    </div>
  )
}

export default memo(Ranking)
