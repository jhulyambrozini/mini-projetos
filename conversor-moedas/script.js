const amountVar = document.querySelector('#amount-var')
const amountFix = document.querySelector('#amount-fix')
const select = document.querySelector('.selected')

const conversion = () => {
  const amount = amountVar.value

  const selectCurrency = select.options[select.selectedIndex].text

    switch (selectCurrency) {
      case 'Dolar':
        amountFix.innerHTML = `US$ ${(amount / 4.94).toFixed(2)}`
        break
      case 'Euro':
        amountFix.innerHTML = `€ ${(amount / 5.40).toFixed(2)}`
        break
      case 'Won':
        amountFix.innerHTML = `₩ ${(amount / 0.0037).toFixed(2)}`
        break
      case 'Libras':
        amountFix.innerHTML = `£ ${(amount / 6.11).toFixed(2)}`
        break
    }
    
}

amountVar.addEventListener('input', conversion)
select.addEventListener('input', conversion)

const options = {
  series: [
    {
      name: "cambio",
      data: [
        {
          x: new Date("2018-02-12").getTime(),
          y: 5.18,
        },
        {
          x: new Date("2018-02-13").getTime(),
          y: 5.3,
        },
        {
          x: new Date("2018-02-14").getTime(),
          y: 5.18,
        },
        {
          x: new Date("2018-02-15").getTime(),
          y: 5.11,
        },
        {
          x: new Date("2018-02-16").getTime(),
          y: 5.18,
        },
        {
          x: new Date("2018-02-17").getTime(),
          y: 5.25,
        },
        {
          x: new Date("2018-02-18").getTime(),
          y: 5.18,
        },
        {
          x: new Date("2018-02-19").getTime(),
          y: 5.2,
        },
      ],
    },
  ],
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  yaxis: {
    min: 5,
    tickAmount: 4,
    labels: {
      formatter: (value) => {
        return value.toFixed(1).replace('.', ',')
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    axisTicks: {
      show: false,
    },
  },
  fill: {
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
  colors: ["#7C3AED"],
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return `<div class="tooltip">
      <span>${String(series[seriesIndex][dataPointIndex]).replace('.', ',')}</span>
      <span>${new Date(
        w.globals.seriesX[seriesIndex][dataPointIndex]
      ).toLocaleDateString("pt-BR", {
        weekday: "short",
        month: "short",
        day: "numeric",
      })}</span>
      </div>`
    },
  },
}

const chart = new ApexCharts(document.querySelector("#chart"), options)
chart.render()