import Image from 'next/image'
export function ImageGallery({ images }) {
  return (
    <div className="grid grid-cols-3 gap-2 mx-auto ">
      {images.map(image => (

        <div key={image.src} className="w-full rounded">
          <figure>
            <Image src={image.src}
              height={image.height}
              width={image.width}
              className="w-full rounded-lg"
              alt={image.caption} />
            <figcaption className='text-zinc-800 dark:text-zinc-200'>{image.caption}</figcaption>
          </figure>
        </div>
      ))}
    </div>
  )
}
