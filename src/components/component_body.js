import StockDetail from "./component_stockDetail";
import React, { useState } from "react";

function ComponentBody() {
    const [isStockSelected, setIsStockSelected] = useState(false);
    const onCloseDetail = () => {
        setIsStockSelected(!isStockSelected);
    }
    return (
        <div>
            <div className="flex pb-10 pt-5">
                <div className={`flex w-2/3 flex-col relative ${isStockSelected ? 'opacity-100' : ''}`}>
                    <div className="absolute top-20 left-1/4">
                        <div className="absolute right-0 top-0.5 rotate-45 w-0 h-0 border-l-8 border-r-8 border-b-8 border-b-blue-500 border-solid border-r-transparent border-l-transparent"></div>
                        <div className="h-16 w-16 rounded-full bg-blue-600 border-20 border-blue-100"></div>
                    </div>
                    <div className="flex justify-between pt-10 text-gray-400 font-semibold">
                        <div className="grid grid-cols-2 bg-gray-200 rounded-lg text-center">
                            <div className={`w-16 h-36 m-5 bg-red-200 rounded-lg flex relative cursor-pointer hover:shadow-lg ${isStockSelected ? 'outline outline-6 outline-blue-500' : ''}`} onClick={() => setIsStockSelected(!isStockSelected)}>
                                <div className={`absolute rounded-md bg-gray-100 p-2 top-1/3 -left-3 ${isStockSelected ? 'bg-blue-500 text-white' : ''}`}>A1</div>
                                <div className="rounded-lg bg-red-400 w-1/4"></div>
                            </div>
                            <div className="w-16 h-36 m-5 bg-gray-300 rounded-lg flex relative">
                                <div className="absolute rounded-md bg-gray-100 p-2 top-1/3 -left-3">A6</div>
                                <div className="rounded-lg bg-gray-500 w-1/2"></div>
                            </div>
                            <div className="w-16 h-36 m-5 bg-gray-300 rounded-lg flex relative">
                                <div className="absolute rounded-md bg-gray-100 p-2 top-1/3 -left-3">A2</div>
                                <div className="rounded-lg bg-gray-500 w-1/3"></div>
                            </div>
                            <div className="w-16 h-36 m-5 bg-gray-300 rounded-lg flex relative">
                                <div className="absolute rounded-md bg-gray-100 p-2 top-1/3 -left-3">A5</div>
                                <div className="rounded-lg bg-gray-500 w-1/3"></div>
                            </div>
                            <div className="w-16 h-36 m-5 bg-gray-300 rounded-lg flex relative">
                                <div className="absolute rounded-md bg-gray-100 p-2 top-1/3 -left-3">A3</div>
                                <div className="rounded-lg bg-gray-500 w-1/3"></div>
                            </div>
                            <div className="w-16 h-36 m-5 bg-green-100 rounded-lg flex relative">
                                <div className="absolute rounded-md bg-gray-100 p-2 top-1/3 -left-3">A4</div>
                                <div className="rounded-lg bg-green-400 w-1/3"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 bg-gray-200 rounded-lg text-center">
                            <div className="w-16 h-36 m-5 bg-gray-300 rounded-lg flex relative">
                                <div className="absolute rounded-md bg-gray-100 p-1 top-1/3 -left-3">B1</div>
                                <div className="rounded-lg bg-gray-500">&emsp;&emsp;</div>
                                <div></div>
                            </div>
                            <div className="w-16 h-36 m-5 bg-gray-300 rounded-lg flex relative">
                                <div className="absolute rounded-md bg-gray-100 p-1 top-1/3 -left-3">B6</div>
                                <div className="rounded-lg bg-gray-500">&emsp;&emsp;</div>
                                <div></div>
                            </div>
                            <div className="w-16 h-36 m-5 bg-gray-300 rounded-lg flex relative">
                                <div className="absolute rounded-md bg-gray-100 p-1 top-1/3 -left-3">B2</div>
                                <div className="rounded-lg bg-gray-500">&emsp;&emsp;</div>
                                <div></div>
                            </div>
                            <div className="w-16 h-36 m-5 bg-gray-300 rounded-lg flex relative">
                                <div className="absolute rounded-md bg-gray-100 p-1 top-1/3 -left-3">B5</div>
                                <div className="rounded-lg bg-gray-500">&emsp;&emsp;</div>
                                <div></div>
                            </div>
                            <div className="w-16 h-36 m-5 bg-gray-300 rounded-lg flex relative">
                                <div className="absolute rounded-md bg-gray-100 p-1 top-1/3 -left-3">B3</div>
                                <div className="rounded-lg bg-gray-500">&emsp;&emsp;</div>
                                <div></div>
                            </div>
                            <div className="w-16 h-36 m-5 bg-gray-300 rounded-lg flex relative">
                                <div className="absolute rounded-md bg-gray-100 p-1 top-1/3 -left-3">B4</div>
                                <div className="rounded-lg bg-gray-500">&emsp;&emsp;&emsp;</div>
                                <div></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 bg-gray-200 rounded-lg text-center">
                            <div className="w-16 h-36 m-5 bg-green-100 rounded-lg flex relative">
                                <div className="absolute rounded-md bg-gray-100 p-2 top-1/3 -left-3">C1</div>
                                <div className="rounded-lg bg-green-400">&emsp;&emsp;&emsp;</div>
                                <div></div>
                            </div>
                            <div className="w-16 h-36 m-5 bg-gray-300 rounded-lg flex relative">
                                <div className="absolute rounded-md bg-gray-100 p-2 top-1/3 -left-3">C6</div>
                                <div className="rounded-lg bg-gray-500">&emsp;&emsp;</div>
                                <div></div>
                            </div>
                            <div className="w-16 h-36 m-5 bg-gray-300 rounded-lg flex relative">
                                <div className="absolute rounded-md bg-gray-100 p-2 top-1/3 -left-3">C2</div>
                                <div className="rounded-lg bg-gray-500">&emsp;&emsp;</div>
                                <div></div>
                            </div>
                            <div className="w-16 h-36 m-5 bg-gray-300 rounded-lg flex relative">
                                <div className="absolute rounded-md bg-gray-100 p-2 top-1/3 -left-3">C5</div>
                                <div className="rounded-lg bg-gray-500">&emsp;&emsp;</div>
                                <div></div>
                            </div>
                            <div className="w-16 h-36 m-5 bg-gray-300 rounded-lg flex relative">
                                <div className="absolute rounded-md bg-gray-100 p-2 top-1/3 -left-3">C3</div>
                                <div className="rounded-lg bg-gray-500">&emsp;&emsp;</div>
                                <div></div>
                            </div>
                            <div className="w-16 h-36 m-5 bg-green-200 rounded-lg flex relative">
                                <div className="absolute rounded-md bg-gray-100 p-2 top-1/3 -left-3">C4</div>
                                <div className="rounded-lg bg-green-400">&emsp;&emsp;&emsp;</div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-32 text-gray-400 font-semibold">
                        <div className="grid grid-cols-3 bg-gray-200 rounded-lg text-center">
                            <div className="h-16 w-24 m-5 bg-gray-300 rounded-lg relative">
                                <div className=" rounded-md bg-gray-100 p-2 absolute left-7 -bottom-3">D1</div>
                                <div className="h-1/2"></div>
                                <div className="rounded-lg bg-gray-500 h-1/2"></div>
                            </div>
                            <div className="h-16 w-24 m-5 bg-gray-300 rounded-lg relative">
                                <div className=" rounded-md bg-gray-100 p-2 absolute left-7 -bottom-3">D2</div>
                                <div className="h-1/2"></div>
                                <div className="rounded-lg bg-gray-500 h-1/2"></div>
                            </div>
                            <div className="h-16 w-24 m-5 bg-red-100 rounded-lg relative">
                                <div className=" rounded-md bg-gray-100 p-2 absolute left-7 -bottom-3">D3</div>
                                <div className="h-3/4"></div>
                                <div className="rounded-lg bg-red-400 h-1/4"></div>
                            </div>
                            <div className="h-16 w-24 m-5 bg-gray-300 rounded-lg relative">
                                <div className=" rounded-md bg-gray-100 p-2 absolute left-7 -bottom-3">D6</div>
                                <div className="h-1/2"></div>
                                <div className="rounded-lg bg-gray-500 h-1/2"></div>
                            </div>
                            <div className="h-16 w-24 m-5 bg-green-100 rounded-lg relative">
                                <div className=" rounded-md bg-gray-100 p-2 absolute left-7 -bottom-3">D5</div>
                                <div className="h-1/4"></div>
                                <div className="rounded-lg bg-green-400 h-3/4"></div>
                            </div>
                            <div className="h-16 w-24 m-5 bg-gray-300 rounded-lg relative">
                                <div className=" rounded-md bg-gray-100 p-2 absolute left-7 -bottom-3">D4</div>
                                <div className="h-1/2"></div>
                                <div className="rounded-lg bg-gray-500 h-1/2"></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 bg-gray-200 rounded-lg text-center">
                            <div className="h-16 w-24 m-5 bg-gray-300 rounded-lg relative">
                                <div className=" rounded-md bg-gray-100 p-2 absolute left-7 -bottom-3">E1</div>
                                <div className="h-1/2"></div>
                                <div className="rounded-lg bg-gray-500 h-1/2"></div>
                            </div>
                            <div className="h-16 w-24 m-5 bg-gray-300 rounded-lg relative">
                                <div className=" rounded-md bg-gray-100 p-2 absolute left-7 -bottom-3">E2</div>
                                <div className="h-1/2"></div>
                                <div className="rounded-lg bg-gray-500 h-1/2"></div>
                            </div>
                            <div className="h-16 w-24 m-5 bg-gray-300 rounded-lg relative">
                                <div className=" rounded-md bg-gray-100 p-2 absolute left-7 -bottom-3">E3</div>
                                <div className="h-1/2"></div>
                                <div className="rounded-lg bg-gray-500 h-1/2"></div>
                            </div>
                            <div className="h-16 w-24 m-5 bg-gray-300 rounded-lg relative">
                                <div className=" rounded-md bg-gray-100 p-2 absolute left-7 -bottom-3">E6</div>
                                <div className="h-1/2"></div>
                                <div className="rounded-lg bg-gray-500 h-1/2"></div>
                            </div>
                            <div className="h-16 w-24 m-5 bg-green-100 rounded-lg relative">
                                <div className=" rounded-md bg-gray-100 p-2 absolute left-7 -bottom-3">E5</div>
                                <div className="h-1/4"></div>
                                <div className="rounded-lg bg-green-400 h-3/4"></div>
                            </div>
                            <div className="h-16 w-24 m-5 bg-gray-300 rounded-lg relative">
                                <div className=" rounded-md bg-gray-100 p-2 absolute left-7 -bottom-3">E4</div>
                                <div className="h-1/2"></div>
                                <div className="rounded-lg bg-gray-500 h-1/2"></div>
                            </div>
                        </div>
                    </div>
                    {isStockSelected &&
                        <div className="absolute right-1/3 top-1/4">
                            <StockDetail handleCloseDetail={onCloseDetail} />
                        </div>
                    }
                </div>
                <div className="w-10 text-center h-full mt-80">
                    <div>
                        <div className="text-5xl font-bold text-red-500">.</div>
                        <div className="text-gray-500 font-bold">1</div>
                    </div>
                    <div>
                        <div className="text-5xl font-bold text-amber-500	">.</div>
                        <div className="text-gray-500 font-bold">5</div>
                    </div>
                    <div>
                        <div className="text-5xl font-bold text-lime-500">.</div>
                        <div className="text-gray-500 font-bold">4</div>
                    </div>
                    <div>
                        <div className="text-5xl font-bold text-green-500">.</div>
                        <div className="text-gray-500 font-bold">43</div>
                    </div>
                </div>
                <div className="flex w-1/3 flex-col">
                    <div className="flex justify-around text-zinc-500 font-medium">
                        <div>Status</div>
                        <div>Product name</div>
                        <div>In stock</div>
                        <div>Price</div>
                    </div>
                    <div className="font-medium">
                        <ul className="scroll-auto overflow-y-auto h-screen">
                            <li className="bg-white rounded-lg m-5 hover:shadow-lg hover:outline hover:outline-2 hover:outline-blue-500">
                                <div className="flex justify-between p-5">
                                    <div className="flex">
                                        <div className="font-bold text-4xl mt-2.5 text-red-600">
                                            .
                                        </div>
                                        <div>
                                            <img className="w-20 h-20" src="https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834" alt="" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div>A1 Apple</div>
                                        <div className="text-gray-500">Crushed</div>
                                    </div>
                                    <div>
                                        <div className="mt-4">
                                            01/185
                                        </div>
                                        <div className="flex mt-3 h-1 w-full bg-red-100 rounded-xl">
                                            <div className="bg-red-500 rounded-2xl w-1/6"></div>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        $14.81
                                    </div>
                                </div>
                            </li>
                            <li className="bg-white rounded-lg m-5 hover:shadow-lg hover:outline hover:outline-2 hover:outline-blue-500">
                                <div className="flex justify-between p-5">
                                    <div className="flex">
                                        <div className="font-bold text-4xl mt-2.5 text-green-600">
                                            .
                                        </div>
                                        <div>
                                            <img className="w-20 h-20" src="https://t4.ftcdn.net/jpg/00/40/29/93/360_F_40299383_U9KUQrii4tclIJjHcM2nMRmguVhw9qCT.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div>C1 Avocado</div>
                                        <div className="text-gray-500">Out of stock</div>
                                    </div>
                                    <div>
                                        <div className="mt-4">
                                            150/185
                                        </div>
                                        <div className="flex mt-3 h-1 w-full bg-green-100 rounded-xl">
                                            <div className="bg-green-500 rounded-2xl w-2/3"></div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        $14.81
                                    </div>
                                </div>
                            </li>
                            <li className="bg-white rounded-lg m-5 hover:shadow-lg hover:outline hover:outline-2 hover:outline-blue-500">
                                <div className="flex justify-between p-5">
                                    <div className="flex">
                                        <div className="font-bold text-4xl mt-2.5 text-red-600">
                                            .
                                        </div>
                                        <div>
                                            <img className="w-20 h-20" src="https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834" alt="" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div>A1 Apple</div>
                                        <div className="text-gray-500">New updated</div>
                                    </div>
                                    <div>
                                        <div className="mt-4">
                                            01/185
                                        </div>
                                        <div className="flex mt-3 h-1 w-full bg-lime-100 rounded-xl">
                                            <div className="bg-lime-500 rounded-2xl w-2/3"></div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        $14.81
                                    </div>
                                </div>
                            </li>
                            <li className="bg-white rounded-lg m-5 hover:shadow-lg hover:outline hover:outline-2 hover:outline-blue-500">
                                <div className="flex justify-between p-5">
                                    <div className="flex">
                                        <div className="font-bold text-4xl mt-2.5 text-green-600">
                                            .
                                        </div>
                                        <div>
                                            <img className="w-20 h-20" src="https://t4.ftcdn.net/jpg/00/40/29/93/360_F_40299383_U9KUQrii4tclIJjHcM2nMRmguVhw9qCT.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div>A1 Apple</div>
                                        <div className="text-gray-500">Crushed</div>
                                    </div>
                                    <div>
                                        <div className="mt-4">
                                            01/185
                                        </div>
                                        <div className="flex mt-3 h-1 w-full bg-red-100 rounded-xl">
                                            <div className="bg-red-500 rounded-2xl w-1/6"></div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        $14.81
                                    </div>
                                </div>
                            </li>
                            <li className="bg-white rounded-lg m-5 hover:shadow-lg hover:outline hover:outline-2 hover:outline-blue-500">
                                <div className="flex justify-between p-5">
                                    <div className="flex">
                                        <div className="font-bold text-4xl mt-2.5 text-red-600">
                                            .
                                        </div>
                                        <div>
                                            <img className="w-20 h-20" src="https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834" alt="" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div>A1 Apple</div>
                                        <div className="text-gray-500">Crushed</div>
                                    </div>
                                    <div>
                                        <div className="mt-4">
                                            01/185
                                        </div>
                                        <div className="flex mt-3 h-1 w-full bg-red-100 rounded-xl">
                                            <div className="bg-red-500 rounded-2xl w-1/6"></div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        $14.81
                                    </div>
                                </div>
                            </li>
                            <li className="bg-white rounded-lg m-5 hover:shadow-lg hover:outline hover:outline-2 hover:outline-blue-500">
                                <div className="flex justify-between p-5">
                                    <div className="flex">
                                        <div className="font-bold text-4xl mt-2.5 text-green-600">
                                            .
                                        </div>
                                        <div>
                                            <img className="w-20 h-20" src="https://t4.ftcdn.net/jpg/00/40/29/93/360_F_40299383_U9KUQrii4tclIJjHcM2nMRmguVhw9qCT.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        A2 Advocado
                                    </div>
                                    <div>
                                        <div className="mt-4">
                                            01/185
                                        </div>
                                        <div className="flex mt-3 h-1 w-full bg-lime-100 rounded-xl">
                                            <div className="bg-lime-500 rounded-2xl w-2/3"></div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        $14.81
                                    </div>
                                </div>
                            </li>
                            <li className="bg-white rounded-lg m-5 hover:shadow-lg hover:outline hover:outline-2 hover:outline-blue-500">
                                <div className="flex justify-between p-5">
                                    <div className="flex">
                                        <div className="font-bold text-4xl mt-2.5 text-red-600">
                                            .
                                        </div>
                                        <div>
                                            <img className="w-20 h-20" src="https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834" alt="" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div>A1 Apple</div>
                                        <div className="text-gray-500">Crushed</div>
                                    </div>
                                    <div>
                                        <div className="mt-4">
                                            01/185
                                        </div>
                                        <div className="flex mt-3 h-1 w-full bg-red-100 rounded-xl">
                                            <div className="bg-red-500 rounded-2xl w-1/6"></div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        $14.81
                                    </div>
                                </div>
                            </li>
                            <li className="bg-white rounded-lg m-5 hover:shadow-lg hover:outline hover:outline-2 hover:outline-blue-500">
                                <div className="flex justify-between p-5">
                                    <div className="flex">
                                        <div className="font-bold text-4xl mt-2.5 text-green-600">
                                            .
                                        </div>
                                        <div>
                                            <img className="w-20 h-20" src="https://t4.ftcdn.net/jpg/00/40/29/93/360_F_40299383_U9KUQrii4tclIJjHcM2nMRmguVhw9qCT.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        A2 Advocado
                                    </div>
                                    <div>
                                        <div className="mt-4">
                                            01/185
                                        </div>
                                        <div className="flex mt-3 h-1 w-full bg-lime-100 rounded-xl">
                                            <div className="bg-lime-500 rounded-2xl w-2/3"></div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        $14.81
                                    </div>
                                </div>
                            </li>
                            <li className="bg-white rounded-lg m-5 hover:shadow-lg hover:outline hover:outline-2 hover:outline-blue-500">
                                <div className="flex justify-between p-5">
                                    <div className="flex">
                                        <div className="font-bold text-4xl mt-2.5 text-red-600">
                                            .
                                        </div>
                                        <div>
                                            <img className="w-20 h-20" src="https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834" alt="" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div>A1 Apple</div>
                                        <div className="text-gray-500">Crushed</div>
                                    </div>
                                    <div>
                                        <div className="mt-4">
                                            150/185
                                        </div>
                                        <div className="flex mt-3 h-1 w-full bg-green-100 rounded-xl">
                                            <div className="bg-green-500 rounded-2xl w-2/3"></div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        $14.81
                                    </div>
                                </div>
                            </li>
                            <li className="bg-white rounded-lg m-5 hover:shadow-lg hover:outline hover:outline-2 hover:outline-blue-500">
                                <div className="flex justify-between p-5">
                                    <div className="flex">
                                        <div className="font-bold text-4xl mt-2.5 text-green-600">
                                            .
                                        </div>
                                        <div>
                                            <img className="w-20 h-20" src="https://t4.ftcdn.net/jpg/00/40/29/93/360_F_40299383_U9KUQrii4tclIJjHcM2nMRmguVhw9qCT.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div>A1 Apple</div>
                                        <div className="text-gray-500">Crushed</div>
                                    </div>
                                    <div>
                                        <div className="mt-4">
                                            01/185
                                        </div>
                                        <div className="flex mt-3 h-1 w-full bg-lime-100 rounded-xl">
                                            <div className="bg-lime-500 rounded-2xl w-2/3"></div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        $14.81
                                    </div>
                                </div>
                            </li>
                            <li className="bg-white rounded-lg m-5 hover:shadow-lg hover:outline hover:outline-2 hover:outline-blue-500">
                                <div className="flex justify-between p-5">
                                    <div className="flex">
                                        <div className="font-bold text-4xl mt-2.5 text-red-600">
                                            .
                                        </div>
                                        <div>
                                            <img className="w-20 h-20" src="https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834" alt="" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div>A1 Apple</div>
                                        <div className="text-gray-500">Crushed</div>
                                    </div>
                                    <div>
                                        <div className="mt-4">
                                            01/185
                                        </div>
                                        <div className="flex mt-3 h-1 w-full bg-lime-100 rounded-xl">
                                            <div className="bg-lime-500 rounded-2xl w-2/3"></div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        $14.81
                                    </div>
                                </div>
                            </li>
                            <li className="bg-white rounded-lg m-5 hover:shadow-lg hover:outline hover:outline-2 hover:outline-blue-500">
                                <div className="flex justify-between p-5">
                                    <div className="flex">
                                        <div className="font-bold text-4xl mt-2.5 text-green-600">
                                            .
                                        </div>
                                        <div>
                                            <img className="w-20 h-20" src="https://t4.ftcdn.net/jpg/00/40/29/93/360_F_40299383_U9KUQrii4tclIJjHcM2nMRmguVhw9qCT.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        A2 Advocado
                                    </div>
                                    <div>
                                        <div className="mt-4">
                                            01/185
                                        </div>
                                        <div className="flex mt-3 h-1 w-full bg-lime-100 rounded-xl">
                                            <div className="bg-lime-500 rounded-2xl w-2/3"></div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        $14.81
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComponentBody;