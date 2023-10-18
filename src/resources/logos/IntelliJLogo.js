
export default function IntelliJLogo({ className = '' }) {
  return (
    <a href='https://www.jetbrains.com/idea/' target='_blank' rel='noreferrer' title='IntelliJ IDEA'>
      <svg className={className} xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 105 105" width="50">
        <linearGradient id="a-idea" gradientUnits="userSpaceOnUse" x1="11.16" x2="58.94" y1="59.21" y2="56.78">
          <stop offset=".09" stop-color="#fc801d"></stop>
          <stop offset=".23" stop-color="#b07f61"></stop>
          <stop offset=".41" stop-color="#577db3"></stop>
          <stop offset=".53" stop-color="#1e7ce6"></stop>
          <stop offset=".59" stop-color="#087cfa"></stop>
        </linearGradient>
        <linearGradient id="b-idea" gradientUnits="userSpaceOnUse" x1="89.05" x2="73.12" y1="54.12" y2="6.52">
          <stop offset="0" stop-color="#fe2857"></stop>
          <stop offset=".08" stop-color="#cb3979"></stop>
          <stop offset=".16" stop-color="#9e4997"></stop>
          <stop offset=".25" stop-color="#7557b2"></stop>
          <stop offset=".34" stop-color="#5362c8"></stop>
          <stop offset=".44" stop-color="#386cda"></stop>
          <stop offset=".54" stop-color="#2373e8"></stop>
          <stop offset=".66" stop-color="#1478f2"></stop>
          <stop offset=".79" stop-color="#0b7bf8"></stop>
          <stop offset="1" stop-color="#087cfa"></stop>
        </linearGradient>
        <linearGradient id="c-idea" gradientUnits="userSpaceOnUse" x1="18.72" x2="78.8" y1="26.61" y2="125.99">
          <stop offset="0" stop-color="#fe2857"></stop>
          <stop offset=".08" stop-color="#fe295f"></stop>
          <stop offset=".21" stop-color="#ff2d76"></stop>
          <stop offset=".3" stop-color="#ff318c"></stop>
          <stop offset=".38" stop-color="#ea3896"></stop>
          <stop offset=".55" stop-color="#b248ae"></stop>
          <stop offset=".79" stop-color="#5a63d6"></stop>
          <stop offset="1" stop-color="#087cfa"></stop>
        </linearGradient>
        <path d="m19.27 72.21-14.12-11.15 8.31-15.39 12.49 4.18z" fill="url(#a-idea)"></path>
        <path d="m100.07 30.09-1.73 55.6-36.98 14.81-20.14-13z" fill="#087cfa"></path>
        <path d="m100.07 30.09-18.3 17.85-23.5-28.83 11.6-13.04z" fill="url(#b-idea)"></path>
        <path d="m41.22 87.5-29.41 10.63 6.16-21.57 7.98-26.71-21.88-7.32 13.9-38.03 31.42 3.71 32.38 39.73z" fill="url(#c-idea)"></path>
        <path d="m22.5 22.5h60v60h-60z"></path>
        <g fill="#fff">
          <path d="m29.98 71.16h22.5v3.75h-22.5z"></path>
          <path d="m41.21 34.12v-4.1h-11.19v4.1h3.14v14.16h-3.14v4.1h11.19v-4.1h-3.13v-14.16z"></path>
          <path d="m51.94 52.7a8.88 8.88 0 0 1 -4.39-1 10.16 10.16 0 0 1 -2.92-2.36l3.09-3.45a8.86 8.86 0 0 0 1.94 1.64 4 4 0 0 0 2.15.6 2.85 2.85 0 0 0 2.19-.87 4.16 4.16 0 0 0 .8-2.83v-14.43h5v14.65a10.14 10.14 0 0 1 -.55 3.49 6.49 6.49 0 0 1 -4.07 4 9.87 9.87 0 0 1 -3.31.52"></path>
        </g>
      </svg>
    </a>
  );
}
      