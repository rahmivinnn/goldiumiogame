const styles = {
  // general
  headText: 'font-rajdhani font-bold text-white sm:text-6xl text-4xl',
  normalText: 'font-rajdhani font-normal text-[24px] text-siteWhite',
  footerText: 'font-rajdhani font-medium text-base text-white',
  infoText: 'font-rajdhani font-medium text-lg text-siteViolet cursor-pointer',

  // glassmorphism
  glassEffect: 'bg-white backdrop-filter backdrop-blur-lg bg-opacity-10',

  // hoc page
  hocContainer: 'min-h-screen flex xl:flex-row flex-col relative',
  hocContentBox: 'flex flex-1 justify-between bg-siteblack py-8 sm:px-12 px-8 flex-col',
  hocLogo: 'w-[160px] h-[52px] object-contain cursor-pointer',
  hocBodyWrapper: 'flex-1 flex justify-center flex-col xl:mt-0 my-16',

  // join battle page
  joinHeadText: 'font-rajdhani font-semibold text-2xl text-white mb-3',
  joinContainer: 'flex flex-col gap-3 mt-3 mb-5',
  joinBattleTitle: 'font-rajdhani font-normal text-xl text-white',
  joinLoading: 'font-rajdhani font-normal text-xl text-white',

  // battleground page
  battlegroundContainer: 'min-h-screen bg-landing flex-col py-12 px-4',
  battleGroundsWrapper: 'flex-wrap mt-10 max-w-[1200px]',
  battleGroundCard: 'sm:w-[420px] w-full h-[260px] p-2 glass-morphism m-4 rounded-lg cursor-pointer battle-card',
  battleGroundCardImg: 'w-full h-full object-cover rounded-md',
  battleGroundCardText: 'font-rajdhani font-semibold text-2xl text-white',

  // Game page
  gameContainer: 'w-full min-h-screen bg-cover bg-no-repeat bg-center flex flex-col items-center justify-between pb-12 p-6',
  gameMoveBox: 'sm:w-20 w-14 sm:h-20 h-14 rounded-full cursor-pointer border-[2px]',
  gameMoveIcon: 'w-1/2 h-1/w-1/2 object-contain',

  // player info component
  playerImg: 'w-14 h-14 object-contain rounded-full',
  playerHealth: 'flex flex-row bg-white rounded-md p-2',
  playerHealthBar: 'flex flex-row justify-center items-center bg-white rounded-md p-2',
  playerMana: 'w-full h-2 rounded-md bg-blue-500',
  playerInfo: 'flex flex-col justify-center items-center gap-2',
  playerInfoSpan: 'font-extrabold text-white',

  // card component
  cardContainer: 'relative w-[260px] h-[335px] z-0 transition-all duration-200',
  cardBox: 'w-full h-full rounded-[15px] relative transform-style-preserve-3d transition-transform duration-1000',
  cardElement: 'absolute w-full h-full rounded-[15px] border-[4px] backface-hidden overflow-hidden',
  cardElementFlip: 'absolute w-full h-full flex flex-col justify-center items-center p-8 text-center',
  cardInfo: 'absolute bottom-0 left-0 right-0 p-4 rounded-b-[11px]',
  cardImg: 'w-[70%] h-[35%] object-contain mx-auto transition-all duration-300',
  cardLogoWrapper: 'relative w-full h-[45%] flex items-center justify-center transition-all duration-300 mt-8',
  cardBorder: 'absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] opacity-50 transition-opacity duration-300',
  cardPointContainer: 'hidden',
  cardPoint: 'hidden',
  cardTextContainer: 'absolute w-full bottom-[12%] left-0 px-4 z-10',
  cardText: 'font-rajdhani text-[16px] font-medium text-[#FFD700] text-center tracking-wider uppercase transition-all duration-300',
  cardEdition: 'absolute bottom-[22%] left-4 text-[14px] font-rajdhani text-[#FFD700] opacity-80 tracking-wide z-10 transition-all duration-300 transform perspective-1000',
  cardTitle: 'absolute top-4 left-4 text-[22px] font-rajdhani font-bold bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent tracking-wider z-10',
  cardBadge: 'absolute top-4 right-4 text-[12px] font-rajdhani font-medium text-[#FFD700] bg-black/50 px-2 py-1 rounded-full z-10 transition-all duration-300',
  cardOverlay: 'absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none z-[1] mix-blend-overlay',
  cardHolographic: 'absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.15),transparent_70%)] pointer-events-none z-[2] mix-blend-overlay transition-opacity duration-300',
  cardParticles: 'absolute inset-0 overflow-hidden pointer-events-none z-[3]',
  cardShineLines: 'absolute inset-0 overflow-hidden pointer-events-none z-[4] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-45 transition-opacity duration-300',

  // custom button component
  btn: 'px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105',
  btnPrimary: 'bg-siteViolet text-white',

  // custom input component
  label: 'font-rajdhani font-semibold text-2xl text-white mb-3',
  input: 'bg-siteDimBlack text-white outline-none focus:outline-siteViolet p-4 rounded-md sm:max-w-[50%] max-w-full',

  // gameload component
  gameLoadContainer: 'absolute inset-0 z-10 w-full h-screen gameload flex-col',
  gameLoadBtnBox: 'w-full flex justify-end px-8',
  gameLoadText: 'font-rajdhani text-siteWhite text-2xl mt-5 text-center',
  gameLoadPlayersBox: 'flex justify-evenly items-center mt-20',
  gameLoadPlayerImg: 'md:w-36 w-24 md:h-36 h-24 object-contain rounded-full drop-shadow-lg',
  gameLoadPlayerText: 'mt-3 font-rajdhani text-white md:text-xl text-base',
  gameLoadVS: 'font-rajdhani font-extrabold text-siteViolet text-7xl mx-16',

  // gameInfo component
  gameInfoIconBox: 'absolute right-2 top-1/2',
  gameInfoIcon: 'bg-siteViolet w-10 h-10 rounded-md cursor-pointer',
  gameInfoIconImg: 'w-3/5 h-3/5 object-contain invert',
  gameInfoSidebar: 'absolute p-6 right-0 top-0 h-screen rounded-md flex-col transition-all ease-in duration-300',
  gameInfoSidebarCloseBox: 'flex justify-end mb-8',
  gameInfoSidebarClose: 'w-10 h-10 rounded-md bg-siteViolet text-white font-rajdhani font-extrabold text-xl cursor-pointer',
  gameInfoHeading: 'font-rajdhani font-bold text-white text-3xl',
  gameInfoText: 'font-rajdhani font-medium text-white text-xl mb-2',

  // common
  flexCenter: 'flex items-center justify-center',
  flexEnd: 'flex justify-end items-center',
  flexBetween: 'flex justify-between items-center',

  // alert
  info: 'text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800',
  success: 'text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800',
  failure: 'text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800',
  alertContainer: 'absolute z-10 top-5 left-0 right-0',
  alertWrapper: 'p-4 rounded-lg font-rajdhani font-semibold text-lg ',
  alertIcon: 'flex-shrink-0 inline w-6 h-6 mr-2',

  // modal
  modalText: 'font-rajdhani font-bold text-3xl text-white mb-6 text-center',
};

export default styles;
