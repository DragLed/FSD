import { GiftsRequest } from '@/shared/api/'
import type { GiftView } from '@/shared/api/'

export async function postGift(
  name: string,
  description: string,
  price: number,
  photo: string
): Promise<GiftView> {
  const response = await GiftsRequest.createGiftGiftsPost({
    name,
    description,
    price,
    photo,
  })

  return response.data
}

export async function getAllGift() {
  const response = await GiftsRequest.getAllMyGiftsGiftsGet()

  return response.data
}

export async function delGift(giftId: number): Promise<string> {
  const response = await GiftsRequest.removeGiftGiftsGiftIdDelete(giftId)

  return response.data
}

export async function getGift(giftId: number) {
  const response = await GiftsRequest.getGiftByIdGiftsGiftIdGet(giftId)

  return response.data
}

export async function editGift(giftId: number, GiftView: GiftView): Promise<string> {
  const response = await GiftsRequest.editGiftGiftsGiftIdPut(giftId, {
    name: GiftView.name,
    description: GiftView.description,
    price: GiftView.price,
    photo: GiftView.photo,
  })

  return response.data
}
