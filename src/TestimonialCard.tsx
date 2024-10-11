import profileThumbnail from "./assets/profile-thumbnail.png";

interface ITestimonialCard {
  profileUrl?: string;
  name?: string;
  username?: string;
  testimonial?: string;
}
export default function TestimonialCard({
  profileUrl,
  name,
  username,
  testimonial,
}: ITestimonialCard) {
  return (
    <div className='w-[340px] flex flex-col gap-4 bg-white p-6 rounded-lg'>
      <div className='flex items-center gap-4 self-stretch'>
        <div className='w-12 h-12'>
          <img
            src={profileUrl ? profileUrl : profileThumbnail}
            alt='Profile'
            className='w-12 h-12 object-cover'
          ></img>
        </div>
        <div className='flex flex-col gap-px grow'>
          <span className='font-semibold text-lg text-justify text-neutral-900 overflow-hidden'>
            {name ? name : "Sarah Dole"}
          </span>
          <span className='font-normal text-sm text-neutral-600'>
            {username ? username : "@sarahdole"}
          </span>
        </div>
      </div>
      <span className='font-normal text-base text-neutral-600'>
        {testimonial
          ? testimonial
          : "I've been searching for high-quality abstract images for my design \
        projects, and I'm thrilled to have found this platform. The variety and \
        depth of creativity are astounding!"}
      </span>
    </div>
  );
}
