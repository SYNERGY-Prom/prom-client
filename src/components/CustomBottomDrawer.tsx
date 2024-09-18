import React from 'react';
import { Box, Drawer, DrawerContent, DrawerOverlay, Image, Text } from '@chakra-ui/react';
import modal_delete from '@/assets/img/modal_delete.png';

type Option = {
  text: string;
  onClick?: () => void;
  update?: boolean;
  delete?: boolean;
};

type CustomBottomDrawerProps = {
  options?: Option[];
  cancel?: boolean;
  onClose: () => void;
  isOpen: boolean;
  isDelete?: boolean;
  onDelete?: () => void;
};

const CustomBottomDrawer = ({
  options,
  cancel,
  onClose,
  isOpen,
  isDelete = false,
  onDelete,
}: CustomBottomDrawerProps) => {
  return (
    <Drawer onClose={onClose} isOpen={isOpen} placement="bottom">
      <DrawerOverlay />
      <DrawerContent
        style={{
          background: 'none',
          padding: 16,
        }}
      >
        <Box
          style={{
            backgroundColor: '#484848',
            textAlign: 'center',
            borderRadius: 17,
          }}
        >
          {options &&
            options.map((option, index) => (
              <React.Fragment key={index}>
                <Box
                  sx={{
                    padding: '20px 0',
                    cursor: 'pointer',
                    _active: {
                      backgroundColor: '#323232',
                      borderRadius:
                        index === 0
                          ? '17px 17px 0 0'
                          : index === options.length - 1
                            ? '0 0 17px 17px'
                            : undefined,
                    },
                    '&:first-of-type': {
                      borderTopLeftRadius: 17,
                      borderTopRightRadius: 17,
                    },
                    '&:last-of-type': {
                      borderBottomLeftRadius: 17,
                      borderBottomRightRadius: 17,
                    },
                  }}
                  onClick={option.onClick}
                >
                  <Text
                    sx={{
                      color: option.update ? '#7BF7ff' : option.delete ? '#E86969' : '#fff',
                      fontSize: 14,
                    }}
                  >
                    {option.text}
                  </Text>
                </Box>
                {index !== options.length - 1 && (
                  <Box
                    style={{
                      borderTop: '1px solid #535353',
                    }}
                  />
                )}
              </React.Fragment>
            ))}
        </Box>

        {isDelete && (
          <>
            <Box
              sx={{
                backgroundColor: '#484848',
                padding: '39px 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                borderRadius: '25px',
                marginBottom: '10px',
              }}
            >
              <Image
                src={modal_delete}
                alt="modal"
                sx={{
                  width: '48px',
                  marginBottom: '14px',
                }}
              />
              <Text sx={{ color: '#fff', fontSize: '18px', fontWeight: '600' }}>
                이 사진을 삭제하시겠습니까?
              </Text>
              <Text sx={{ color: '#a6a6a6', fontSize: '14px', fontWeight: '500' }}>
                수정완료 후 사진을 복구할 수 없습니다.
              </Text>
            </Box>
            <Box
              style={{
                backgroundColor: '#E86969',
                padding: '20px 0',
                textAlign: 'center',
                borderRadius: 17,
                marginTop: 12,
              }}
              onClick={onDelete}
            >
              <Text
                sx={{
                  color: '#fff',
                  fontSize: 14,
                }}
              >
                사진 삭제
              </Text>
            </Box>
          </>
        )}

        {cancel && (
          <Box
            style={{
              backgroundColor: '#484848',
              padding: '20px 0',
              textAlign: 'center',
              borderRadius: 17,
              marginTop: 12,
            }}
            onClick={onClose}
          >
            <Text
              sx={{
                color: '#fff',
                fontSize: 14,
              }}
            >
              취소
            </Text>
          </Box>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default CustomBottomDrawer;