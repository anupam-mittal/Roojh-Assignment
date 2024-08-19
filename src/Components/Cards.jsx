import React from 'react'

function GreenIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="16"
        fill="none"
        viewBox="0 0 17 16"
      >
        <path
          stroke="#06C270"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.917 11.334l6.667-6.667M4.917 4.667h6.667v6.667"
        ></path>
      </svg>
    );
  }

  function RedIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="16"
        fill="none"
        viewBox="0 0 17 16"
      >
        <path
          stroke="#F04438"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5.166 4.667l6.667 6.666M11.833 4.667v6.666H5.166"
        ></path>
      </svg>
    );
  }
  
  

function InfoCard({title, text, meterPer, profit, value, left, meterPerLeft})
{
    return (
        <div className='w-[267px] h-[134px] p-[16px] g-[16px] flex flex-col'>
            <div className='w-[114px] h-[48px] flex flex-col'>
                <p className='w-[114px] h-[16px] font-[500px] text-[12px] text-[#667085]'>{title}</p>
                <p className='w-[114px] h-[26px] font-[700px] text-[22px] text-[#1D2939]'>{text}</p>
            </div>
            <div className='w-[235px] h-[30px]'>
                <p className='items-end text-right w-[235px] h-[20px] font-[400px] text-[12px]'>{left}</p>
                <div className='w-[235px] text-center items-center h-[6px] flex flex-row bg-[#EDEEFD] relative rounded-xl'>
                    <div className={`h-full w-[${meterPer}%] bg-[#4a58ec] absolute rounded-l-xl`} style={{'width' : meterPer + '%'}}></div>
                </div>
            </div>
            <div className='w-[107px] h-[24px] flex flex-row text-left items-center'>
                {profit && <GreenIcon/>}
                {!profit && <RedIcon/>}
                <p className={`${profit == true ? 'text-[#39d739]' : 'text-[red]'} w-[87px] h-[20px] pt-[4px] font-[400px] text-[12px]`}>{value}</p>
            </div>
        </div>
    )
}

function Cards() {
    const cardInfo = [
        {
            'title' : 'Total Revenue',
            'text' : '$36,0123',
            'left' : '',
            'meterPer' : 80,
            'meterPerLeft' : 20,
            'profit' : true,
            'value' : '2.7% in 1 month'
        },
        {
            'title' : 'Calls Booked',
            'text' : '78',
            'left' : '17 to go',
            'meterPer' : 75,
            'meterPerLeft' : 25,
            'profit' : true,
            'value' : '30% in 1 month'
        },
        {
            'title' : 'Hot Leads',
            'text' : '24',
            'left' : '26 to go',
            'meterPer' : 50,
            'meterPerLeft' : 50,
            'profit' : false,
            'value' : '1.5% in 1 month'
        },
        {
            'title' : 'Goals Target',
            'text' : '86',
            'left' : '4 to go',
            'meterPer' : 90,
            'meterPerLeft' : 10,
            'profit' : true,
            'value' : '2.7% in 1 month'
        }
    ];

    const cards = cardInfo.map((val) => {
        return <InfoCard title={val['title']} text={val['text']} left={val['left']} meterPer={val['meterPer']} profit={val['profit']} value={val['value']} meterPerLeft={val['meterPerLeft']}/>
    });

  return (
    <div className='flex flex-row mt-6 ml-1 mr-10 justify-between w-[1141px] h-[134px]'>
        {cards}  
    </div>
  )
};

export default Cards;
