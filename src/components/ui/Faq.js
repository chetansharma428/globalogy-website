import { Image, Accordion, Grid, Container, Title } from "@mantine/core";
import image from "../../assests/images/Faq_image.svg";
import classes from "./Navbar.module.css";

const answer1 =
  "Fill the form available on our website & our team will reach out to you in 5-7 working days to provide you custom solutions that work for you.";
const answer2 =
  "With the Direct Jobs Placement (blue collar jobs) there is a guarantee. But with the Job Support Service (non blue collar jobs), there is no guarantee. 84% of our JSS clients have heard from the recruiters with many interviews scheduled.";
const answer3 =
  "Service charges vary per the services, not countries.";
const answer4 =
  "Unfortunately, we are unable to provide any refunds.";
const answer5 =
  "Yes. Masterclass is scheduled specifically tailored to one country on a monthly basis.";
const answer6 =
  "Yes. You can book a 1:1 Consultation Call with Nidhi Nagori.";

export function FaqWithImage() {
  return (
    <div class="container-fluid bg-light" style={{paddingBottom:"4rem"}}>
      <div className={classes.wrapper}>
        <Container size="lg">
          <Grid id="faq-grid" gutter={50}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Image src={image} alt="Frequently Asked Questions" />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Title order={2} ta="left" className={classes.title_fq}>
                Frequently Asked Questions
              </Title>

              <Accordion
                chevronPosition="right"
                defaultValue="reset-password"
                variant="separated"
              >
                <Accordion.Item className={classes.item} value="reset-password">
                  <Accordion.Control>
                  I am unable to find the right option for myself. Whom should I contact?
                  </Accordion.Control>
                  <Accordion.Panel>{answer1}</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item
                  className={classes.item}
                  value="another-account"
                >
                  <Accordion.Control>
                  Do you provide a job guarantee?
                  </Accordion.Control>
                  <Accordion.Panel>{answer2}</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="newsletter">
                  <Accordion.Control>
                  Are the service charges different for different countries?
                  </Accordion.Control>
                  <Accordion.Panel>{answer3}</Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item className={classes.item} value="credit-card">
                  <Accordion.Control>
                  Is there a refund policy?
                  </Accordion.Control>
                  <Accordion.Panel>{answer4}</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item className={classes.item} value="credit">
                  <Accordion.Control>
                  Do Masterclasses take place every month?
                  </Accordion.Control>
                  <Accordion.Panel>{answer5}</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item className={classes.item} value="debit-card">
                  <Accordion.Control>
                  Can I consult with Nidhi Nagori?
                  </Accordion.Control>
                  <Accordion.Panel>{answer6}</Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </Grid.Col>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
