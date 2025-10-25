import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Home as HomeIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/StructuredData";

const BookTest = () => {
  const location = useLocation();
  const { test } = location.state || {};

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Book Diagnostic Test | Vishakaha Multispeciality Clinic Visakhapatnam"
        description="Book your diagnostic test at Vishakaha Multispeciality Clinic in Visakhapatnam. NABL-accredited lab, quick results, and expert technicians. Schedule your test now."
        keywords="book diagnostic test visakhapatnam, medical lab vizag, pathology lab visakhapatnam, diagnostic center vizag, blood test vizag, health checkup visakhapatnam"
        canonicalUrl="https://visakhamultispeciality.com/book-test"
      />
      <StructuredData type="booking" />

      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link to="/" className="flex items-center text-muted-foreground hover:text-primary">
              <HomeIcon className="h-5 w-5 mr-2" />
              <span>Home</span>
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Book Test</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            {test ? `Book ${test.name} Test` : "Book Your Diagnostic Test"}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Schedule your diagnostic test with Vishakaha Multispeciality Clinic's NABL-accredited laboratory in Visakhapatnam. Quick results, expert technicians, and compassionate care.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center">
                Test Booking Form
              </CardTitle>
              <Badge className="mx-auto mt-2">Secure & Easy Booking</Badge>
            </CardHeader>
            <CardContent>
              <div
                className="w-full bg-muted"
                style={{
                  height: '1174px',
                  overflowY: 'hidden',
                  borderRadius: 'var(--radius)'
                }}
              >
           
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeUwvVdL59FCGGHtm6ifZiIA8c7Nd1MxeVtgrAFF_Z2h-O5Jg/viewform?embedded=true" width="100%"
                  height="1174"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                ></iframe>
              </div>
            </CardContent>
          </Card>
          <div className="text-center mt-8">
            <Link to="/services/medical-lab">
              <Button size="lg" variant="outline">
                View All Tests <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Help Booking Your Test?
          </h2>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Contact our team for assistance or explore our other healthcare services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Contact Us
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline">
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookTest;