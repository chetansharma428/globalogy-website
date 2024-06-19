import React from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import Navbar from "./ui/Navbar";

const Courses = () => {
  return (
    <div>
      <Navbar />
      <div class="container" style={{ paddingBottom: "100px" }}>
        {/* <div class="h2 fw-bold mb-4 text-center">Our Courses</div> */}
        <div class="row justify-content-center align-items-center gap-2 mb-2">
          <div class="col-lg-5 col-sm-12">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section component="a" href="/dubaimasterclass">
                <Image
                  src="https://tagmango.com/publicassets/-chancenkarte-visa-bf5bed5d90042a926e8cc7b86c8c062d.png"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text class="h5 fw-bold">Chancenkarte Visa Guide</Text>
                <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                  Newly added
                </Badge>
              </Group>

              <Text size="sm">
                The Chancenkarte aka Opportunity Card Visa is a game-changer for
                skilled non-EU workers seeking employment in Germany. This new
                visa allows you to live and work part-time in Germany for up to
                one year while you search for a full-time job or vocational
                training.
              </Text>
              <div>
                <a href="/chancenkartmasterclass">
                  <Button
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                    class="btn button-g text-light fw-bold"
                  >
                    Get Started
                  </Button>
                </a>
              </div>
            </Card>
          </div>
          <div class="col-lg-5 col-sm-12">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section component="a" href="/masterclass">
                <Image
                  src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/6654746b9a9184e55299fbe0_DUBAI%20(2).png"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text class="h5 fw-bold">Dubai Masterclass</Text>
                <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                  Newly added
                </Badge>
              </Group>

              <Text size="sm">
                In a comprehensive Masterclass on Dubai, unlock the secrets of
                building a global career in the City of Gold. Learn about
                immigration, visa sponsorship, job market scenario, job hunting
                strategies, insider tips and much more from the experts.
              </Text>
              <div>
                <a href="/dubaimasterclass">
                  <Button
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                    class="btn button-g text-light fw-bold"
                  >
                    Get Started
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
        <div class="row justify-content-center align-items-center gap-2 mb-2">
          <div class="col-lg-5 col-sm-12">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section component="a" href="/masterclass">
                <Image
                  src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/64cb62b128252df1fdab2e0a_-times-square-5-efe6a1a378ab406245c45704d8cf9eaf.png"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text class="h5 fw-bold">Australia Masterclass</Text>
                <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                  Newly added
                </Badge>
              </Group>

              <Text size="sm">
                A comprehensive 2-hour Masterclass on Australia covering
                Immigration, Visa Sponsorship, Job Applications, Lifestyle, and
                more! Dreaming of building a career in the land of sunshine and
                opportunity? Get ready to know the secrets from 4 Industry
                Experts.
              </Text>
              <div>
                <a href="/australiamasterclass">
                  <Button
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                    class="btn button-g text-light fw-bold"
                  >
                    Get Started
                  </Button>
                </a>
              </div>
            </Card>
          </div>
          <div class="col-lg-5 col-sm-12">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section component="a" href="/masterclass">
                <Image
                  src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/65d3272b71e9fd3b54a7b253_-whatsapp-image-2024-02-09-at-18-230437b343d0e41d2193212e7fd8cc5a.jpg"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text class="h5 fw-bold">Luxembourg & France Masterclass</Text>
                <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                  Newly added
                </Badge>
              </Group>

              <Text size="sm">
                They are facing labour challenges. France & Luxembourg need
                200,000 workers by 2030! Register to learn about immigration,
                visa sponsorship, job market scenario, job hunting strategies,
                insider tips and much more from the experts.
              </Text>
              <div>
                <a href="/luxembourgmasterclass">
                  <Button
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                    class="btn button-g text-light fw-bold"
                  >
                    Get Started
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
        <div class="row justify-content-center align-items-center gap-2 mb-2">
          <div class="col-lg-5 col-sm-12">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section component="a" href="/masterclass">
                <Image
                  src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/649d930382637e30ff1e5fe3_thumbnails%20(4)-p-500.png"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text class="h5 fw-bold">UK Masterclass</Text>
                <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                  Newly added
                </Badge>
              </Group>

              <Text size="sm">
                Unlock your British adventure with our exclusive 2 Hour
                Masterclass! Demystify the immigration process, secure visa
                sponsorships, craft flawless job applications, and discover how
                to thrive in your new home in the UK!
              </Text>
              <div>
                <a href="/ukmasterclass">
                  <Button
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                    class="btn button-g text-light fw-bold"
                  >
                    Get Started
                  </Button>
                </a>
              </div>
            </Card>
          </div>
          <div class="col-lg-5 col-sm-12">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section component="a" href="/masterclass">
                <Image
                  src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/641b106a95ddff5c01a593e6_BrandBuilding.webp"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text class="h5 fw-bold">
                  LinkedIn & Professional Brand Building
                </Text>
                <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                  Newly added
                </Badge>
              </Group>

              <Text size="sm">
                In this exclusive 2-hour Masterclass, you'll unlock the secrets
                to building a powerful LinkedIn profile and crafting a personal
                brand that gets you noticed by the right people. Explore the
                hidden gems of LinkedIn. Go beyond the resume!
              </Text>
              <div>
                <a href="/linkedinonemasterclass">
                  <Button
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                    class="btn button-g text-light fw-bold"
                  >
                    Get Started
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
        <div class="row justify-content-center align-items-center gap-2 mb-2">
          <div class="col-lg-5 col-sm-12">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section component="a" href="/masterclass">
                <Image
                  src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/64cb62b128252df1fdab2e0a_-times-square-5-efe6a1a378ab406245c45704d8cf9eaf.png"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text class="h5 fw-bold">Netherlands Masterclass</Text>
                <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                  Newly added
                </Badge>
              </Group>

              <Text size="sm">
                An exclusive Masterclass for living & working in the
                Netherlands. Explore visa options, craft winning job
                applications, secure sponsorships, and discover the ins and outs
                of Dutch life. This 2-day Masterclass unlocks the secrets to a
                smooth move to the Netherlands!
              </Text>
              <div>
                <a href="/netherlandsmasterclass">
                  <Button
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                    class="btn button-g text-light fw-bold"
                  >
                    Get Started
                  </Button>
                </a>
              </div>
            </Card>
          </div>
          <div class="col-lg-5 col-sm-12">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section component="a" href="/masterclass">
                <Image
                  src="https://tagmango.com/publicassets/-migrate-to-ireland-7c922d61a3fa806cc3a91c91d039edfd.png"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text class="h5 fw-bold">Ireland Masterclass</Text>
                <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                  Newly added
                </Badge>
              </Group>

              <Text size="sm">
                This exclusive 2 hour Masterclass unlocks the secrets to a
                smooth move to Ireland! Explore visa options, craft winning job
                applications, secure sponsorships, and discover the charm of
                Irish life. Make your dream a reality!
              </Text>
              <div>
                <a href="/linkedinonemasterclass">
                  <Button
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                    class="btn button-g text-light fw-bold"
                  >
                    Get Started
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
        <div class="row justify-content-center align-items-center gap-2 mb-2">
          <div class="col-lg-5 col-sm-12">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section component="a" href="/masterclass">
                <Image
                  src="https://tagmango.com/publicassets/-62f6fd36e4b03e42d9d57f4a_scaled_cover-893db98bdcde6fbb3fe951b597661ecd.jpg"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text class="h5 fw-bold">Canada Masterclass</Text>
                <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                  Newly added
                </Badge>
              </Group>

              <Text size="sm">
                Did you know Canada has not one but multiple pathways to enter
                and live in the country? This masterclass will help you plan
                your move & settle in Canada. It will help you wherever you are
                in your immigration journey.
              </Text>
              <div>
                <a href="/canadamasterclass">
                  <Button
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                    class="btn button-g text-light fw-bold"
                  >
                    Get Started
                  </Button>
                </a>
              </div>
            </Card>
          </div>
          <div class="col-lg-5 col-sm-12">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section component="a" href="/masterclass">
                <Image
                  src="https://tagmango.com/publicassets/-63ef96d6e4b09fa1a6f86aa4_scaled_cover-e9285eed3d9d5508f1ec488021662ef1.jpg"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text class="h5 fw-bold">
                  Profile Building for Career Abroad
                </Text>
                <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                  Newly added
                </Badge>
              </Group>

              <Text size="sm">
                5M+ jobs are open to Foreigners in Canada, USA, UK,Europe,
                Australia and more, but having the right profile can be a
                barrier. This MasterClass is designed to teach you how to build
                a strong profile that will help you land your dream job abroad.
              </Text>
              <div>
                <a href="/profilebuildingmasterclass">
                  <Button
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                    class="btn button-g text-light fw-bold"
                  >
                    Get Started
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
        <div class="row justify-content-center align-items-center gap-2 mb-2">
          <div class="col-lg-5 col-sm-12">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section component="a" href="/masterclass">
                <Image
                  src="https://tagmango.com/publicassets/-6328e6a6e4b02ef6805462a2_scaled_cover-d38e5b3300b283dbd61a382ae0b87217.jpg"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text class="h5 fw-bold">Global Masterclass</Text>
                <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                  Newly added
                </Badge>
              </Group>

              <Text size="sm">
                The world is your oyster! Over the past few years, record labour
                shortages in high-income countries have created a great demand
                for international workers, professionals, and students. Unlock
                your global potential!
              </Text>
              <div>
                <a href="/globalmasterclass">
                  <Button
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                    class="btn button-g text-light fw-bold"
                  >
                    Get Started
                  </Button>
                </a>
              </div>
            </Card>
          </div>
          <div class="col-lg-5 col-sm-12">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section component="a" href="/masterclass">
                <Image
                  src="https://tagmango.com/publicassets/-63ef96d6e4b09fa1a6f86aa4_scaled_cover-e9285eed3d9d5508f1ec488021662ef1.jpg"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text class="h5 fw-bold">
                  Profile Building for Career Abroad
                </Text>
                <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                  Newly added
                </Badge>
              </Group>

              <Text size="sm">
                5M+ jobs are open to Foreigners in Canada, USA, UK,Europe,
                Australia and more, but having the right profile can be a
                barrier. This MasterClass is designed to teach you how to build
                a strong profile that will help you land your dream job abroad.
              </Text>
              <div>
                <a href="/profilebuildingmasterclass">
                  <Button
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                    class="btn button-g text-light fw-bold"
                  >
                    Get Started
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
