import MainLayout from "@/layouts/main/mainLayout";
import SampleListCard from "../sample-list-card";
import SampleHeader from "../sample-header";

export default function SampleView() {
    return (
        <MainLayout>
            <section className="min-h-screen py-16 md:py-24 bg-transparent">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col gap-8">

                        {/* Header Section */}
                        <SampleHeader />

                        {/* List Card Section */}
                        <div className="mt-6">
                            <SampleListCard />
                        </div>

                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
