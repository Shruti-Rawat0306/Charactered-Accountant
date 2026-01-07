import React from 'react'
import { useNavigate } from "react-router-dom";
import TopBlog from '../Blog/TopBlog'
import Footer from '../FrontPage1/Footer'

function TopBlogDetails() {
  const navigate = useNavigate(); // 👈 hook
  return (
    <>
    <TopBlog/>
    <div className='h-110 w-full bg-[#F6EFF9] pl-30 pt-15 pb-10'>
        <div ><h5  onClick={() => navigate("/")}  className='text-[#667085] cursor-pointer'>BACK</h5></div>
        <div className='flex gap-40'>
        <div className='leftside pt-18'>
            <h1 className='text-[#010101] text-4xl font-semibold pt-4'>Free Marketing Plan<br/> Template</h1>
            <p className='text-[#101828] text-m pt-4'>When we think about building a business, we often focus on <br/>the big things - marketing, sales, or product</p>    
        </div>
        <div className='rightside pt-10'>
            <img className='w-130 h-60' src="../../public/9ca412fa840de131974162b09d68033e23a850b5 (2).jpg" alt="" /> 
        </div>
        </div>
    </div>
    {/**second part */}
    <div className='min-h-screen w-full bg-[#FFFFFF] pl-60 pt-30 pb-20'>
           <div className='first'>
            <h1 className='font-bold text-[#010101] text-3xl'>Accounting Tells the Real Story of Your Business</h1>
            <p className='text-[#010101] text-m font-medium pt-2'>Accounting isn’t just about numbers or balance sheets — it’s the language of your business. It tells you whether you’re <br/> making money, losing it, or just breaking even. With accurate financial records, you can see where your money comes from,<br/> where it goes, and how to manage it wisely.</p>
            <p className='text-[#010101] text-m font-medium pt-2'>For example, a simple profit and loss statement can reveal whether your expenses are eating into your profits or if your<br/> revenue model needs a tweak.</p>
           </div>

           <div className='second pt-3'>
            <h1 className='font-bold text-[#010101] text-3xl'>Builds Trust and Credibility</h1>
            <p className='text-[#010101] text-m font-medium pt-2'>Whether it’s investors, lenders, or partners — everyone trusts numbers more than words.<br/> A clear, transparent accounting system builds credibility for your business. It shows that you manage your finances<br/> responsibly and are serious about growth.<br/></p>
            <p className='text-[#010101] text-m font-medium pt-2'>Gone are the days of manual ledgers and bulky registers.<br/>
              With modern accounting software like Tally, Zoho Books, and QuickBooks, businesses can automate invoices, reconcile<br/> accounts instantly, and even generate reports with a single click.<br/>Digital accounting not only saves time but also reduces human error and improves accuracy.</p>
           </div>

           <div className='third pt-3'>
            <h1 className='font-bold text-[#010101] text-3xl'>Helps You Make Smarter Decisions</h1>
                <p className='text-[#010101] text-m font-medium pt-2'>Imagine driving a car with no dashboard — you’d have no idea how fast you’re going or when to refuel. The same goes for<br/> running a business without accounting.<br/>
                 Your financial reports act as your dashboard, helping you make better decisions about budgeting, investments, and future<br/> growth.</p>
                <p className='text-[#010101] text-m font-medium pt-2'>From tax filing to regulatory compliance, accounting keeps your business legally sound.<br/> 
                Proper bookkeeping ensures that every transaction is documented, every invoice is tracked, and every tax payment is made<br/> on time — saving you from last-minute stress and penalties.</p>
                <p className='text-[#010101] text-m font-medium pt-2'>Whether it’s investors, lenders, or partners — everyone trusts numbers more than words.<br/> 
                A clear, transparent accounting system builds credibility for your business. It shows that you manage your finances<br/> responsibly and are serious about growth.</p>
           </div>

                 <div className='fourth pt-8'>
                        <img className='w-[890px] h-[300px]' src="../../public/d8442d47a4e210075845a6d107909089553a8a31.png" alt="" />
                 </div>

                 <div className='fifth pt-3'>
                    <h1 className='font-bold text-[#010101] text-3xl'>Builds Trust and Credibility</h1>
                    <p className='text-[#010101] text-m font-medium pt-2'>Whether it’s investors, lenders, or partners — everyone trusts numbers more than words.<br/>
                     A clear, transparent accounting system builds credibility for your business. It shows that you manage your finances<br/> responsibly and are serious about growth.<br/></p>
                    <p className='text-[#010101] text-m font-medium pt-2'>Gone are the days of manual ledgers and bulky registers.<br/>
                     With modern accounting software like Tally, Zoho Books, and QuickBooks, businesses can automate invoices, reconcile<br/> accounts instantly, and even generate reports with a single click.<br/>
                     Digital accounting not only saves time but also reduces human error and improves accuracy.</p>
                 </div>

                  <div className='sixth pt-3'>
                    <h1 className='font-bold text-[#010101] text-3xl'>Builds Trust and Credibility</h1>
                    <p className='text-[#010101] text-m font-medium pt-2'>Whether it’s investors, lenders, or partners — everyone trusts numbers more than words.<br/> A clear, transparent accounting system builds credibility for your business. It shows that you manage your finances <br/>responsibly and are serious about growth.<br/></p>
                    <p className='text-[#010101] text-m font-medium pt-2'>Gone are the days of manual ledgers and bulky registers.<br/> With modern accounting software like Tally, Zoho Books, and QuickBooks, businesses can automate invoices, reconcile<br/> accounts instantly, and even generate reports with a single click.<br/>Digital accounting not only saves time but also reduces human error and improves accuracy.<br/></p>
                 </div>
            </div>

            {/**Third */}
            <div className='min-h-screen w-full bg-[#F6EFF9] pt-8 pb-30'>
     <div><h3 className='text-[#000000] text-3xl font-semibold pl-7'>Similar Blog</h3></div>
     <div className='flex gap-4 pl-7 pt-6'>
      <div><img className='w-100 h-60' src="../../public/2c71d31963450c58fe599c40a68f1bf74c09b3de (1).jpg" alt="" />
      <div className='pt-8'>
      <p className='text-[#6941C6] font-medium'>19 Jan 2022 • 30 mins</p>
      <p className='flex text-[#101828] font-semibold text-2xl justify-between pt-2'>Bill Walsh leadership lessons<img src="../../public/Icon wrap (2).png" alt="" /> </p>
      <p className='text-[#667085] pt-2'>Like to know the secrets of transforming a 2-14 team<br/> into a 3x Super Bowl winning Dynasty?</p>
      </div>
      </div>

     <div>
    <img className='w-100 h-60' src="../../public/2c71d31963450c58fe599c40a68f1bf74c09b3de (1).jpg"alt="" />
      <div className='pt-8'>
      <p className='text-[#6941C6] font-medium'>19 Jan 2022 • 30 mins</p>
      <p className='flex text-[#101828] font-semibold text-2xl justify-between pt-2'>Bill Walsh leadership lessons<img src="../../public/Icon wrap (2).png" alt="" /> </p>
      <p className='text-[#667085] pt-2'>Like to know the secrets of transforming a 2-14<br/> team into a 3x Super Bowl winning Dynasty?</p>
      </div>
      </div>
      
     <div>
    <img className='w-100 h-60' src="../../public/2c71d31963450c58fe599c40a68f1bf74c09b3de (1).jpg" alt="" />
      <div className='pt-8'> 
      <p className='text-[#6941C6] font-medium'>19 Jan 2022 • 30 mins</p>
      <p className='flex text-[#101828] font-semibold text-2xl justify-between pt-2'>Bill Walsh leadership lessons<img src="../../public/Icon wrap (2).png" alt="" /> </p>
      <p className='text-[#667085] pt-2'>Like to know the secrets of transforming a 2-14<br/> team into a 3x Super Bowl winning Dynasty?</p>
      </div>
      </div>

    </div>   
         
        <div className='flex gap-4 pl-7 pt-6'>
      <div><img className='w-100 h-60' src="../../public/2c71d31963450c58fe599c40a68f1bf74c09b3de (1).jpg" alt="" />
      <div className='pt-8'>
      <p className='text-[#6941C6] font-medium'>19 Jan 2022 • 30 mins</p>
      <p className='flex text-[#101828] font-semibold text-2xl justify-between pt-2'>Bill Walsh leadership lessons<img src="../../public/Icon wrap (2).png" alt="" /> </p>
      <p className='text-[#667085] pt-2'>Like to know the secrets of transforming a 2-14 team<br/> into a 3x Super Bowl winning Dynasty?</p>
      </div>
      </div>

     <div>
    <img className='w-100 h-60' src="../../public/2c71d31963450c58fe599c40a68f1bf74c09b3de (1).jpg"alt="" />
         <div className='pt-8'>
      <p className='text-[#6941C6] font-medium'>19 Jan 2022 • 30 mins</p>
      <p className='flex text-[#101828] font-semibold text-2xl justify-between pt-2'>Bill Walsh leadership lessons<img src="../../public/Icon wrap (2).png" alt="" /> </p>
      <p className='text-[#667085] pt-2'>Like to know the secrets of transforming a 2-14<br/> team into a 3x Super Bowl winning Dynasty?</p>
      </div>
      </div>

        <div>
        <img className='w-100 h-60' src="../../public/2c71d31963450c58fe599c40a68f1bf74c09b3de (1).jpg" alt="" />
        <div className='pt-8'>
      <p className='text-[#6941C6] font-medium'>19 Jan 2022 • 30 mins</p>
      <p className='flex text-[#101828] font-semibold text-2xl justify-between pt-2'>Bill Walsh leadership lessons<img src="../../public/Icon wrap (2).png" alt="" /> </p>
      <p className='text-[#667085] pt-2'>Like to know the secrets of transforming a 2-14<br/> team into a 3x Super Bowl winning Dynasty?</p>
      </div>
      </div>

    </div>   


        <div className='flex gap-4 pl-7 pt-6'>
      <div><img className='w-100 h-60' src="../../public/2c71d31963450c58fe599c40a68f1bf74c09b3de (1).jpg" alt="" />
      <div className='pt-8'>
      <p className='text-[#6941C6] font-medium'>19 Jan 2022 • 30 mins</p>
      <p className='flex text-[#101828] font-semibold text-2xl justify-between pt-2'>Bill Walsh leadership lessons<img src="../../public/Icon wrap (2).png" alt="" /> </p>
      <p className='text-[#667085] pt-2'>Like to know the secrets of transforming a 2-14 team<br/> into a 3x Super Bowl winning Dynasty?</p>
      </div>
      </div>

     <div>
    <img className='w-100 h-60' src="../../public/2c71d31963450c58fe599c40a68f1bf74c09b3de (1).jpg"alt="" />
    <div className='pt-8'>
      <p className='text-[#6941C6] font-medium'>19 Jan 2022 • 30 mins</p>
      <p className='flex text-[#101828] font-semibold text-2xl justify-between pt-2'>Bill Walsh leadership lessons<img src="../../public/Icon wrap (2).png" alt="" /> </p>
      <p className='text-[#667085] pt-2'>Like to know the secrets of transforming a 2-14<br/> team into a 3x Super Bowl winning Dynasty?</p>
      </div>
      </div>

        <div>
        <img className='w-100 h-60' src="../../public/2c71d31963450c58fe599c40a68f1bf74c09b3de (1).jpg" alt="" />
        <div className='pt-8'>
      <p className='text-[#6941C6] font-medium'>19 Jan 2022 • 30 mins</p>
      <p className='flex text-[#101828] font-semibold text-2xl justify-between pt-2'>Bill Walsh leadership lessons<img src="../../public/Icon wrap (2).png" alt="" /> </p>
      <p className='text-[#667085] pt-2'>Like to know the secrets of transforming a 2-14<br/> team into a 3x Super Bowl winning Dynasty?</p>
      </div>
      </div>

    </div>   
    
    </div>
    <Footer/>
    </>
  )
}

export default TopBlogDetails