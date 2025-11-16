import Background from "./components/background";
import Footer from "./components/footer";

type Props = {
    children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
    return (
        <div className='bg-black! relative! overflow-hidden!'>
            <Background />
            {children}
            <Footer />
        </div>
    );
}
