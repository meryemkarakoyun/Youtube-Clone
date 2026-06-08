const SkeletonLoader = () => {
  //20 elemana sahip bir dizi
  const array = new Array(20).fill();
  return (
    <div className="page">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6">
        {array.map((item, key) => (
          <div key={key} className="animate-pulse">
            {/* Thumbnail */}
            <div className="w-full aspect-video bg-grey rounded-xl mb-3 rounded" />
            {/* video bilgileri  */}
            <div className="flex gap-3">
              {/* Avatar */}
              <div className="size-9 rounded-full bg-grey" />
              {/* Yazı içeriği */}
              <div className="flex-1 space-y-2">
                {/* başlık */}
                <div className="h-4 bg-grey rounded w-full" />
                <div className="h-4 bg-grey rounded w-3/4" />
                {/* Kanal ismi */}
                <div className="h-3 bg-grey w-1/3 rounded" />
                {/* Görüntülenme / Tarih */}
                <div>
                  <div className="h-3 bg-grey rounded w-20" />
                  <div className="h-3 bg-grey rounded w-26" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;
