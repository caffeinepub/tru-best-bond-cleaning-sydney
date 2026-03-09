import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Suburbs from "./pages/Suburbs";
import ServiceDetail from "./pages/services/ServiceDetail";
import SuburbDetail from "./pages/suburbs/SuburbDetail";

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faq",
  component: () => <Home scrollToFaq />,
});
const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: Services,
});
const serviceDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services/$slug",
  component: ServiceDetail,
});
const suburbsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs",
  component: Suburbs,
});
const suburbDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/suburbs/$slug",
  component: SuburbDetail,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  faqRoute,
  servicesRoute,
  serviceDetailRoute,
  suburbsRoute,
  suburbDetailRoute,
  aboutRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
