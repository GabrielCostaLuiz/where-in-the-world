'use client'
import Link from "next/link";
import { CountryPage } from "../types/CountryPage";
import { BsArrowLeft } from "react-icons/bs";
import { ThemeContext } from "../context/contexts";
import { useContext } from "react";


export default function SingleCountry({ languages, flags, name, population, region, capital, tld, subregion, borders, currencies, code }: CountryPage) {
    const native = name.nativeName[Object.keys(name.nativeName)[0]]
    const currencie = currencies[Object.keys(currencies)[0]]
    const { theme } = useContext(ThemeContext);
    return (
    
        <div className={`${theme==='dark'?' bg-gray-800 cover text-white':null} px-10`}>

           <div className={`w-fit mt-10 mb-20 px-4  p-2 shadow-lg  bg-slate-700 text-white ${theme==='dark' && 'shadow-lg'}`}>
           <Link href='/' className=" flex items-center gap-2 rounded"> <BsArrowLeft/> Back</Link>
            </div> 

<section className="grid sm:grid-cols-1  md:grid-cols-2 gap-5 pb-5 ">
            <img src={flags.svg} alt={`Bandeira de ${name.common}`} width={700} className="sm:mb-10" />
          
        <div className="flex flex-col justify-center gap-10 ">
            <h2 className="text-2xl font-bold sm:mb-5">{name.common}</h2>
            <div className="">
            <p className="my-1"><span className="font-semibold">Native Name: </span>{native.official}</p>
      
            
            <p className="my-1"><span className="font-semibold">Population: </span>{population}</p>
            <p className="my-1"><span className="font-semibold">Subregion: </span>{subregion}</p>
            
            
            <p className="my-1"><span className="font-semibold">Region: </span>{region}</p>
            
            <p className="my-1"><span className="font-semibold">Capital: </span>{capital}</p>
            </div>

            <div>
            <p className="my-1"><span className="font-semibold">Top Level Domain: </span>{tld[0]}</p>
            <p className="my-1"><span className="font-semibold">Currencies: </span>{currencie.name}</p>
            <p className="my-1"><span className="font-semibold"> Languages: </span> {Object.values(languages).join(", ")}</p>
            </div>
            {borders && borders.length > 0 ? (
                <div className="mt-5 font-semibold   ">
                    <p>Border Countries: </p>
                    <div className="flex justify-between mt-3 gap-3">
                    {borders.map((code, index) => (
  <Link href={`/pages/country/${name.common}/${code}`} key={index} className="flex-1 hover:scale-105 transition-all">
      <p className="bg-slate-700 shadow-md py-1 rounded-sm text-center cursor-pointer text-sm text-white ">{code}</p>
  </Link>
))}
</div>

                </div>
            ) : (
                <p>No border countries available.</p>
            )}
        </div>
</section>            
        </div>
    );
}
