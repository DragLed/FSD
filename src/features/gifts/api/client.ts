import { Gifts } from '@/shared/api/generated/Gifts'
import type { GiftView } from '@/shared/api/'

const GiftsClient = new Gifts({
  baseURL: 'http://127.0.0.1:8000',
  withCredentials: true,
})

export async function postGift(
  name: string,
  description: string,
  price: number,
  photo: string
): Promise<GiftView> {
  const response = await GiftsClient.createGiftGiftsPost({
    name,
    description,
    price,
    photo,
  })

  return response.data
}

export async function getAllGift() {
  const response = await GiftsClient.getAllMyGiftsGiftsGet()

  return response.data
}

export async function delGift(giftId: number): Promise<string> {
  const response = await GiftsClient.removeGiftGiftsGiftIdDelete(giftId)

  return response.data
}
