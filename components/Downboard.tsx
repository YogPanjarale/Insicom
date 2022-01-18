type Props = {
    icon: string;
    text: string;
    onClick?: () => void;
}
const Item = ({icon, text, onClick}:Props) => {
    return (
        <div className="flex flex-row items-center justify-center">
            <button className="flex items-center justify-center active:scale-110" onClick={onClick}>
                <img className="w-8 h-8  border-pink-50 " src={icon} />
            </button>
            <div className="flex items-center justify-center sr-only">{text}</div>
        </div>
    );
};
function Downboard({}){
    return (
        <nav className="flex flex-row justify-between bg-pink-50 border border-black border-opacity-20 px-4 py-4">
            <Item icon="/assets/home.svg" text="Home" />
            <Item icon="/assets/building.png" text="Build" />
            <Item icon="/assets/search.svg" text="Search" />
            <Item icon="/assets/bell.svg" text="Notifications" />
        </nav>
    )
}
export default Downboard;