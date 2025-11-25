export const SeachBar = () => {
  return (
    <div className="relative mb-10">
      <input
        type="text"
        placeholder="칵테일 이름 또는 재료를 검색해주세요."
        className="w-full p-4 pl-6 rounded-lg bg-slate-800 text-slate-100 border border-slate-700 focus:ring-2 focus: ring-pink-500 focus:border-transparent" />
    </div>
  );
}