export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center bg-amber-50 border-4 border-gray-300 rounded-lg'>
        <div className="">
          <h1 className='text-3xl font font-semibold text-center mt-4'>
            About Memoria !!
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-8 mt-10'>
            <p>
              Welcome to Memoria!! This was created by Anoop Rastogi as a personel project. This platform offers you to post your memories and experience of travel to amazing places. Journal it down here for people to witness your wonderful experience.
            </p>

            <p className="mb-4">
              Here you can also see and join other people's travle diaries, comment on them and like their experience to show them how fun their memory is.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
