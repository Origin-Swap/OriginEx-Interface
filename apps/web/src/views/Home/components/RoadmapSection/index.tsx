import { Text, Heading, Card, CardHeader, CardBody, CircleOutlineIcon, Flex } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { LandingBodyWrapper } from '../styles'
import config from './config'

const FaqSection = () => {
  const { t } = useTranslation()

  return (
    <LandingBodyWrapper>
      <LandingBodyWrapper>
        <Flex flexDirection="column">
          <Heading scale="xl" color="black" display="block" marginLeft="40px">
            {t('Roadmap')}
          </Heading>
          <Flex flexDirection="column">
            {config({ t }).map((roadblock, i) => (
              <div style={{ display: 'flex', gap: '24px' }}>
                <div
                  style={{
                    fontSize: '24px',
                    width: '12px',
                    background: 'var(--colors-backgroundDisabled)',
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: i === 0 ? '25% 25% 0 0' : i === config({ t }).length - 1 ? '0 0 25% 25%' : '0',
                  }}
                >
                  <span
                    style={{
                      borderRadius: '50%',
                      background: 'var(--colors-gradientCardHeader)',
                      minWidth: '42px',
                      minHeight: '42px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transform: 'translateX(-50%) translateX(6px)',
                    }}
                  >
                    {roadblock.icon}
                  </span>
                </div>
                <Card marginY="8px" style={{ flexGrow: '1' }}>
                  <CardHeader>
                    <Heading scale="lg" color="white">
                      {roadblock.title}
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    {roadblock.description.map((description) => (
                      <Text>- {description}</Text>
                    ))}
                    <Text textAlign="end" fontStyle="italic" color="textSubtle">
                      {roadblock.reached}
                    </Text>
                  </CardBody>
                </Card>
              </div>
            ))}
          </Flex>
        </Flex>
      </LandingBodyWrapper>
    </LandingBodyWrapper>
  )
}

export default FaqSection
