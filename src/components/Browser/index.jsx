import React, { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Icon,
  Flex,
  Button,
  Text,
  VStack, 
  HStack,
  useDisclosure,
  IconButton,
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel
} from "@chakra-ui/react";
import {BiChevronUp, BiChevronDown, BiChevronRightSquare} from 'react-icons/bi';
import {FaEthereum, FaTwitter} from 'react-icons/fa';
import {RiLockPasswordFill} from 'react-icons/ri';
import {BsArrowUpRight, BsFiles, BsCircle} from 'react-icons/bs';
import {CgClose} from 'react-icons/cg';
import {BiStar} from 'react-icons/bi';
import {IoIosRocket, IoMdRefresh} from 'react-icons/io';
import {GrFormRefresh} from 'react-icons/gr';

export default function Browser() {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [isAIOpen, setAIOpen] = useState(false);
  const [exchangeOpen, setExchangeOpen] = useState(false);
  const [selectedView, setSelectedView] = useState(()=>'pair');

  const renderTokenButton = (tokenLabel, tokenIcon) => {
    return (
      <Flex borderRadius='15px' _hover={{cursor: 'pointer', backgroundColor:'#AAAAAA'}} onClick={onOpen}>
        <HStack spacing={1} _hover={{ cursor: 'pointer'}}>
          <Icon color='#fafafa' as={tokenIcon}/>
          <Text color='#fafafa' fontWeight={500}>
            {tokenLabel}
          </Text>
          <Icon color='#fafafa' as={BiChevronUp}/>
        </HStack>
        <Modal isOpen={isOpen} onClose={onClose} size='lg'>
          <ModalOverlay/>
          <ModalContent>
            <ModalHeader>
              <Flex flexDir='row' justifyContent='space-between'>
                <HStack>
                  <Icon as={tokenIcon}/>
                  <Text>
                    {tokenLabel}
                  </Text>
                  <Text>
                    Token Name
                  </Text>
                </HStack>
                <IconButton variant='outline' icon={<CgClose/>} justifySelf='flex-end' onClick={onClose}/>
              </Flex>
            </ModalHeader>
            <ModalBody w='100%'>
              <HStack position='relative' zIndex={2} right={-290} top={8} ml='0.2rem'>
                <Flex flexDir='row' alignItems='center' borderRadius='15px' _hover={{cursor: 'pointer', backgroundColor:'#AAAAAA'}} pl='0.5rem' pr='0.5rem'>
                    Trade
                    <Icon as={BsArrowUpRight}/>
                </Flex>
                <Flex flexDir='row' alignItems='center' borderRadius='15px' _hover={{cursor: 'pointer', backgroundColor:'#AAAAAA'}} pl='0.5rem' pr='0.5rem'>
                    <Icon as={BiStar} mr='0.1rem'/>
                    Watchlist
                </Flex> 
              </HStack>
              <VStack w='100%'>
                <Flex flexDir='row' w='100%'>
                  <Tabs align='start' w='100%'>
                    <TabList>
                      <Tab>Chart</Tab>
                      <Tab>Info</Tab>
                      <Tab>Tknomics</Tab>
                    </TabList>

                    <TabPanels>
                      <TabPanel>
                        Chart Area should display here
                      </TabPanel>
                      <TabPanel>
                        <VStack center>
                          <Flex flexDir='row' alignItems='center' borderRadius='15px' _hover={{cursor: 'pointer', backgroundColor:'#AAAAAA'}} pl='0.5rem' pr='0.5rem'>
                            <Icon as={tokenIcon}/>
                            View Token Page
                          </Flex>
                          <HStack spacing={3}>
                            <Flex flexDir='row' alignItems='center' borderRadius='15px' _hover={{cursor: 'pointer', backgroundColor:'#AAAAAA'}} pl='0.5rem' pr='0.5rem'>
                              Address
                              <Icon as={BsFiles}/>
                            </Flex>
                            <Flex flexDir='row' alignItems='center' borderRadius='15px' _hover={{cursor: 'pointer', backgroundColor:'#AAAAAA'}} pl='0.5rem' pr='0.5rem'>
                              UniSwap V2
                              <Icon as={BsArrowUpRight}/>
                            </Flex>
                            <Flex flexDir='row' alignItems='center' borderRadius='15px' _hover={{cursor: 'pointer', backgroundColor:'#AAAAAA'}} pl='0.5rem' pr='0.5rem'>
                              Etherscan
                              <Icon as={BsArrowUpRight} _hover={{cursor: 'pointer'}}/>
                            </Flex>
                            <Icon boxSize='1.4em' as={FaTwitter}/>
                          </HStack>
                          <VStack center spacing={0} pt='1rem' pb='1rem'>
                            <Text>
                              Total Supply: supply
                            </Text>
                            <Text>
                              Decimals 18
                            </Text>
                          </VStack>
                          <Text>
                            Most liquid pair
                          </Text>
                          Need to add last bit of panel
                        </VStack>     
                      </TabPanel>
                      <TabPanel>

                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </Flex>

              </VStack>
              
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
      
    )
  }
  
  const renderTokenPair = (token1, token1Icon, token2, token2Icon, liquidity, token1Amount, token2Amount, uniIndex, pairInfo, dextLink, lockPage) => {
    const handleAIOpen = () => {
      setAIOpen(!isAIOpen);
    }
    return (
      <Flex w='100%'>
        <Accordion allowToggle w='100%'>
          <AccordionItem w='100%' onClick={()=>handleAIOpen()}>
                  <HStack spacing={2} zIndex={1} position='relative' top='8'>
                    {renderTokenButton(token1, token1Icon)}
                    {renderTokenButton(token2, token2Icon)}
                  </HStack>
            <AccordionButton>
              <VStack w='100%'>
                <Flex flexDir='row' alignItems='center' justifyContent='flex-end' w='100%'>
                  
                    <Text color='#00c988'>
                      $ {liquidity} M
                    </Text>
                    <Icon as={RiLockPasswordFill} color='#00c988'/>
                                 
                </Flex>
                <Flex flexDir='row' justifyContent='space-between' w='100%'>
                  <HStack>
                    <Text color='#b9babb'>
                      Liquidity:
                    </Text>
                    <Text color='#00c988'>
                      ${liquidity}M
                    </Text>
                  </HStack>
                  <HStack>
                    <Text color='#b9babb'>
                      (99.6%) next in 5 months
                    </Text>
                    <Icon as={isAIOpen ? BiChevronUp : BiChevronDown} color='#b9babb'/>
                  </HStack>
                </Flex>
              </VStack>
            </AccordionButton>
            <AccordionPanel>
                <VStack spacing={3}>
                  <VStack spacing={1}>
                    <HStack>
                      <Flex flexDir='row' borderRadius='15px' backgroundColor='#1f2327' alignItems='center' pl='0.2rem' pr='0.2rem'>
                        <Icon as={token1Icon} boxSize='1.4rem' color='#b9babb'/>
                        <Text color='#b9babb' fontSize='1.4rem'>
                          {token1Amount}
                        </Text>                        
                      </Flex>
                      <Flex flexDir='row' borderRadius='15px' backgroundColor='#1f2327' alignItems='center' pl='0.2rem' pr='0.2rem'>
                        <Icon as={token2Icon} boxSize='1.4rem' color='#b9babb'/>
                        <Text color='#b9babb' fontSize='1.4rem'>
                          {token2Amount}
                        </Text>
                      </Flex>
                      <Icon as={IoMdRefresh} boxSize='2.0rem' color='#b9babb' _hover={{cursor:'pointer', backgroundColor:'#1f2327'}} borderRadius='full' p='0.4rem'/>
                    </HStack>
                    <Text color='#b9babb' fontSize='0.9rem' mt='0.3rem' as='i'>
                      UniSwap V2 Index: {uniIndex}
                    </Text>
                  </VStack>
                  <HStack>
                    <Flex flexDir='row' borderRadius='15px' _hover={{cursor: 'pointer', backgroundColor:'#AAAAAA'}} pl='0.5rem' pr='0.5rem'>
                      <Text fontWeight={600}  color='#fafafa'>
                        Pair
                      </Text>
                      <Icon as={BsArrowUpRight} color='#fafafa'/>
                    </Flex>
                    <Flex flexDir='row' borderRadius='15px' _hover={{cursor: 'pointer', backgroundColor:'#AAAAAA'}} pl='0.5rem' pr='0.5rem'>
                      <Icon as={BsArrowUpRight} color='#fafafa'/>
                      <Text fontWeight={600}  color='#fafafa'>
                        Dex
                      </Text>
                      <Icon as={BsArrowUpRight} color='#fafafa'/>
                    </Flex>
                    <Flex borderRadius='15px' _hover={{cursor: 'pointer', backgroundColor:'#AAAAAA'}} pl='0.5rem' pr='0.5rem'>
                      <Text  fontWeight={600} color='#fafafa'>
                        View Lock Page
                      </Text>
                    </Flex>
                  </HStack>
                </VStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    )
  }

  const renderExchangeSelection = (exchangeList) => {
    return (
      <Flex flexDir='column' w='30%' backgroundColor='#191c1f' margin='auto'
      border='thin solid #353535'
      borderRadius='20px'
      >
        <Flex justifyContent='center' flexDir='column'>
          <Text fontWeight={300} fontSize='1.4rem' p='0.8rem' color='#fafafa' opacity='0.7' textAlign='center'>
            Select an exchange
          </Text>
          {exchangeList.map((exchange, index) => {
          return(
            <Flex p='1.2rem' onClick={()=>handleExchangeClose()} flexDir='row' key={index} _hover={{cursor:'pointer', backgroundColor: '#323232'}} borderBottom='thin solid #353535' justifyContent='flex-start' alignItems='center'>
              <Image src={exchange.logo} boxSize={10} marginRight='0.5rem'/>
              <VStack spacing={0} align>
                <Text fontWeight={500} fontSize='1.4rem' color='#fafafa'>
                  {exchange.name}
                </Text>
                <Text  fontSize='0.8rem' color='#fafafa' opacity='0.7'>
                  {exchange.chain}
                </Text>
              </VStack>
            </Flex>
          )
          })}
          <Text fontWeight={300} fontSize='1.2rem' p='0.3rem' color='#fafafa' opacity='0.7' textAlign='center' borderBottom='thin solid #353535' backgroundColor='191c1f'>
           Testnets
          </Text>
          <Flex p='1.2rem' onClick={()=>handleExchangeClose()} flexDir='row'  _hover={{cursor:'pointer', backgroundColor: '#323232'}} justifyContent='flex-start' alignItems='center'>
              <Image src={'./unilogo.png'} boxSize={10} marginRight='0.5rem'/>
              <VStack spacing={0} align>
                <Text fontWeight={500} fontSize='1.4rem' color='#fafafa'>
                  Uniswap V2 - Kovan
                </Text>
                <Text  fontSize='0.8rem' color='#fafafa' opacity='0.7'>
                  Kovan Testnet
                </Text>
              </VStack>
            </Flex>
        </Flex>
      </Flex>
    )
  }

  const handleExchangeOpen = () => {
    setExchangeOpen(true);
  }
  const handleExchangeClose = () => {
    setExchangeOpen(false);
  }

  const renderSelectedExchange = (exchangeName) => {
    return (
      <Flex justifyContent='space-around' w='100%' 
      borderRadius='8px' border='thin solid #353535' 
      backgroundColor='#191c1f' 
      _hover={{cursor:'pointer', backgroundColor: '#323232'}}
      onClick={()=>{handleExchangeOpen()}}
      >
        <VStack p='0.5rem'>
          <Text as='i' fontSize='0.8rem' color='#b9babb'>
            Selected Exchange
          </Text>
          <HStack alignItems='center' >
            <Image src='./unilogo.png' boxSize={8}/>
            <Text fontWeight={800} fontSize='1.4rem' color='#fafafa'>
              {exchangeName}
            </Text>
            <Icon as={BiChevronDown} boxSize={6}/>
          </HStack>
        </VStack>
      </Flex>
    )
  }

  const handleSelectedViewClick = (selection) => {
    setSelectedView(selection);
    
  }
  const ETH = 'ETH';
  let exchangeListProp = [
    {
      'logo': './unilogo.png',
      'name': 'UniSwap v2',
      'chain': 'Binance Mainnet'
    },
    {
      'logo': './unilogo.png',
      'name': 'UniSwap v2',
      'chain': 'Binance Mainnet'
    },
    {
      'logo': './unilogo.png',
      'name': 'UniSwap v2',
      'chain': 'Binance Mainnet'
    },
    {
      'logo': './unilogo.png',
      'name': 'UniSwap v2',
      'chain': 'Binance Mainnet'
    },
    {
      'logo': './unilogo.png',
      'name': 'UniSwap v2',
      'chain': 'Binance Mainnet'
    },
    {
      'logo': './unilogo.png',
      'name': 'UniSwap v2',
      'chain': 'Binance Mainnet'
    },
    {
      'logo': './unilogo.png',
      'name': 'UniSwap v2',
      'chain': 'Binance Mainnet'
    },
  ]
 
  
  return (
    <Flex flexDir='column' w='100%' h='1200px' backgroundColor='#191c1f'>
      <Flex w='100%' h='120%' background='radial-gradient(circle at 50%, #a4fff6, #191c1f, transparent 100%)' opacity='0.2' pos='fixed' top='-950' zIndex={1}/>
    {exchangeOpen 
    ? 
    <Flex h='100%' backgroundColor='#191c1f'>
      {renderExchangeSelection(exchangeListProp)}
    </Flex>
    : 
      <VStack w='30%' margin='auto' pos='relative' top='-400'>
        {renderSelectedExchange('UniSwap V2')}
        <Flex w='100%' flexDir='row' justifyContent='space-between' border='thin solid #353535' borderRadius='10px'>
          <HStack w='33%' borderBottomLeftRadius='10px' p='0.5rem' justifyContent='center' 
          borderBottom={selectedView === 'token' ? '2px solid #00c988' : ''} onClick={()=>handleSelectedViewClick('token')} _hover={{cursor: 'pointer'}}>
            <Icon as={BsCircle} fontWeight={600} fontSize='1rem' color={selectedView === 'token' ? '#00c988' :'#aaaaaa'}/>
            <Text fontWeight={600} fontSize='1.2rem' color='#fafafa'>
              Tokens
            </Text>
          </HStack>
          <HStack w='33%' justifyContent='center' p='0.5rem' 
          borderBottom={selectedView === 'pair' ? '2px solid #00c988' : ''} onClick={()=>handleSelectedViewClick('pair')} _hover={{cursor: 'pointer'}}>
            <Icon as={BsCircle} fontWeight={600} fontSize='1rem' color={selectedView === 'pair' ? '#00c988' :'#aaaaaa'}/>
            <Text fontWeight={600} fontSize='1.2rem' color='#fafafa'>
              Pairs
            </Text>
          </HStack>
          <HStack w='33%' justifyContent='center' p='0.5rem' borderBottomRightRadius='10px' 
          borderBottom={selectedView === 'ilo' ? '2px solid #00c988' : ''} onClick={()=>handleSelectedViewClick('ilo')} _hover={{cursor: 'pointer'}}>
            <Icon as={IoIosRocket} fontWeight={600} fontSize='1rem' color={selectedView === 'ilo' ? '#00c988' :'#aaaaaa'}/>
            <Text fontWeight={600} fontSize='1.2rem' color='#fafafa'>
              ILO's
            </Text>
          </HStack>
        </Flex>
        {renderTokenPair(ETH,FaEthereum, ETH, FaEthereum, 6.7, 1, 10000, '24234', '123098', '19238123')}
      </VStack>
    }
     </Flex>
    

  );
}
