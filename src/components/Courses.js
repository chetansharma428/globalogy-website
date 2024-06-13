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
                A comprehensive 2-hour Masterclass on Australia covering
                Immigration, Visa Sponsorship, Job Applications, Lifestyle, and
                more!
              </Text>
              <div>
                <a href="/masterclass">
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
                  src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/6603db39b4acd36d57400f3e_Australia%20Mssterclass.png"
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
                more!
              </Text>
              <div>
                <a href="/masterclass">
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
                  src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/64cb851dd4f6301b864d6ed6_-62cbd7020cf2f2bdf82782ad_scaled_cover-819536fbcc6138a42265c42f36203353.jpg"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text class="h5 fw-bold">The Ireland Masterclass</Text>
                <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                  Newly added
                </Badge>
              </Group>

              <Text size="sm">
                A comprehensive 2-hour Masterclass on Australia covering
                Immigration, Visa Sponsorship, Job Applications, Lifestyle, and
                more!
              </Text>
              <div>
                <a href="/masterclass">
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
                A comprehensive 2-hour Masterclass on Australia covering
                Immigration, Visa Sponsorship, Job Applications, Lifestyle, and
                more!
              </Text>
              <div>
                <a href="/masterclass">
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
        {/* <div class="row justify-content-center align-items-center gap-2 mb-2">
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
                <Badge class="badge animate__animated animate__tada animate__infinite	infinite">Newly added</Badge>
              </Group>

              <Text size="sm">
                A comprehensive 2-hour Masterclass on Australia covering
                Immigration, Visa Sponsorship, Job Applications, Lifestyle, and
                more!
              </Text>
              <div>
              <a href="/masterclass"><Button color="blue" fullWidth mt="md" radius="md" class="btn button-g text-light fw-bold">
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
                  src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/6603db39b4acd36d57400f3e_Australia%20Mssterclass.png"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text class="h5 fw-bold">Australia Masterclass</Text>
                <Badge class="badge animate__animated animate__tada animate__infinite	infinite">Newly added</Badge>
              </Group>

              <Text size="sm">
                A comprehensive 2-hour Masterclass on Australia covering
                Immigration, Visa Sponsorship, Job Applications, Lifestyle, and
                more!
              </Text>
              <div>
              <a href="/masterclass"><Button color="blue" fullWidth mt="md" radius="md" class="btn button-g text-light fw-bold">
                Get Started
              </Button>
              </a>
              </div>
            </Card>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Courses;
